import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { GeographicalDataService } from '../../geographical-data.service';
import { AntPath, antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-leaflet-map-geojson',
  templateUrl: './leaflet-map-geojson.component.html',
  styleUrls: ['./leaflet-map-geojson.component.scss']
})
/**
 * This class handles eveything map leaflet relatede.
 */
export class LeafletMapGeojsonComponent implements AfterViewInit {

  private zoomLevelRemoveIcons = 15;
  private poiLayer;
  private wallLayer;
  private roomNameLayer;
  private poiGeoJSON;
  private roomNameGeoJSON;
  private previousZoomLevel = 0;
  standerid = 7;
  pathlayer;
  private antpath;
  path: string;
  private map;
  antpathCords = [[]];

  constructor(private geographicalDataService: GeographicalDataService) {

    //this leves here to make sure it gets a subscribement before the map is startede
    this.geographicalDataService.path.subscribe(x => {
      if (x.length != 1) {
        this.path = x;
        if (this.pathlayer != null) {
          this.pathlayer.remove();
        }
        this.pathlayer = L.geoJSON(JSON.parse(this.path), {
          style(feature) {
            return {
              color: "red",
              weight: 2,
              fillOpacity: 0.6
            };
          }
        }).addTo(this.map);
        //Work in progress for animations
        if (x != null && x.toString() != undefined) {
          JSON.parse(x).forEach(x => {
            if (x != null && x.toString().length >= 16) {
              x["geometry"]["coordinates"].forEach(element => {
                this.antpathCords.push(element)
                // console.log(element);
              });
            }
            // ;["geometry"]["coordinates"]
            // console.log(this.antpathCords);
          });
        }

      }
    })
  }

  /**
   * This is for the ant animation
   * currently in testing mode.
   */
  animatiePath() {
    //TODO:Add antpath animation here
  }

  /**
   * creates the map
   * This makes sure eveything is startede in the rigth order.
   */
  private initMap(): void {

    this.setMapOptions();
    this.getWalls();
    this.getRooms();
    this.addRoomNames(1);
    this.mapEvents();
    // this.addPoi();

  }

  /**
   * Sets the requied map optiones
   */
  private setMapOptions() {
    this.map = L.map('map', {
      zoom: 0,
      minZoom: 13.8,
      maxZoom: 20,
      zoomSnap: 0,
      dragging: true,
      crs: L.CRS.EPSG3395,
      zoomControl: false
    });
    // Set the map option to CRS EPSG3395 (Cordinate refence system) what cordinates system is to be used with geojson.
    // NOTE: the database is running EPSG4326
    // All lengths is in km becuse of this (eg. 3.45566 km just remove km and add M)
    // Then it is the rigth distance.
  }

  /**
   * This calls the api for the rooms (they are in ploygon format)
   */
  private getRooms() {
    this.geographicalDataService.getRoomGeoJSON().subscribe(roomsGeoJSON => {
      L.geoJSON(JSON.parse(roomsGeoJSON), {
        style(feature) {
          let colorArray = ["green", "blue", "grey", "darkred", "purple", "#36003d", "red"]
          return {
            color: colorArray[feature.properties.color],
            className: feature.properties.name,
            weight: 1,
            fillOpacity: 0.6
          }; // Assign a style based on the geoJSON color property
        }
      }).addTo(this.map);
    });
  }

  /**
   * This calls the api for the Area (eg. zbc )
   */
  private getWalls() {
    this.geographicalDataService.getWallsGeoJSON().subscribe(wallsGeoJSONFromService => {
      this.wallLayer = L.geoJSON(JSON.parse(wallsGeoJSONFromService), {
        style(feature) {
          return { color: "#005C34" };
        }
      }).addTo(this.map);

      // Zoom to wall layer
      this.map.padding = [10, 0];
      this.map.fitBounds(this.wallLayer.getBounds());
      this.map.setMaxBounds(this.wallLayer.getBounds());


    });
  }

  /**
   * Clik event to show the path/Route on the map when the user clicks on the map.
   */
  private mapEvents() {
    this.map.on('click', ev => {
      let tmp_room_name = ev.originalEvent.target.innerHTML;
      let room_name = ""
      if (tmp_room_name == "") {
        room_name = ev.originalEvent.target.className.animVal.toString().replace(" leaflet-interactive", " ");
      } else {
        room_name = tmp_room_name;
      }
      // Fly to path
      // this.map.flyToBounds(this.pathLayer.getBounds());
      this.getpath(room_name);
      if (this.pathlayer != null) {
        this.pathlayer.remove();
        this.animatiePath();
        // this.antpath.addTo(this.map); // this is for the animation of the path
      }
    });

    this.map.on('zoomend', (e: Event) => {
      /// console.log(this.map._zoom);
      if (this.roomNameLayer != null) {
        this.roomNameLayer.clearLayers();

        let font_size_from_zoom_level = this.map._zoom - 13.3;
        this.addRoomNames(font_size_from_zoom_level);
        if (this.map._zoom > this.zoomLevelRemoveIcons) {
          this.addPoi();

          if (this.previousZoomLevel < this.map._zoom) {

          }
        } else {
          if (this.previousZoomLevel > this.map._zoom) {
          }
          if (this.poiLayer != null) {
            this.poiLayer.clearLayers();
            this.poiLayer = null;
          }
        }
        this.previousZoomLevel = this.map._zoom;
      }
    });

    // endregion
  }

  /**
   * this calls the api for a route to the end point nammed endpoiName.
   * @param endpoiName the piont to navigate too
   */
  getpath(endpoiName: string) {
    this.geographicalDataService.getPath(2, endpoiName);
  }

  /**
   * this calls the api for the labels for the rooms.
   * @param size used for font size
   */
  private addRoomNames(size: any): void {
    this.geographicalDataService.getLabelsGeoJSON().subscribe(roomNameGeoJSON => {
      this.roomNameLayer = L.geoJSON(JSON.parse(roomNameGeoJSON), {
        pointToLayer(feature, latlng) {
          return L.marker(latlng, {
            icon: L.divIcon({
              className: 'room_label',
              html: '<p style="font-style: normal; font-size: ' + size + 'em;"><b>' + feature.properties.name + '</b></p>',
              iconAnchor: [15, 15]
            })
          });
        }
      }).addTo(this.map);
    });

  }

  /**
   * Points used for navigation
   */
  private addPoi(): void {
    if (this.poiLayer == null) {
      const doorIcon = L.icon({
        iconUrl: '/assets/door_white.png',
        iconSize: [30, 30], // size of the icon
        iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
      });

      this.poiLayer = L.geoJSON(this.poiGeoJSON, {
        pointToLayer(feature, latlng) {
          return L.marker(latlng, {
            icon: L.divIcon({
              html: '<svg height="100" width="100"><circle cx="50" cy="50" r="150" stroke="black" stroke-width="3" fill="red" />              </svg>',
              iconAnchor: [15, 15]
            })
          });


          // return L.marker(latlng, { icon: doorIcon },);
        }
      }).addTo(this.map);
    }
  }

//'/assets/marker.png'


  ngAfterViewInit(): void {
    this.initMap();
  }
}
