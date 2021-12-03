import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { GeographicalDataService } from '../../geographical-data.service';

@Component({
  selector: 'app-leaflet-map-geojson',
  templateUrl: './leaflet-map-geojson.component.html',
  styleUrls: ['./leaflet-map-geojson.component.scss']
})
export class LeafletMapGeojsonComponent implements AfterViewInit {

  private zoomLevelRemoveIcons = 15;

  private poiLayer;
  private wallLayer;
  private roomNameLayer;
  private poiGeoJSON;
  private roomNameGeoJSON;
  private previousZoomLevel = 0;

  private map;


  constructor(private geographicalDataService: GeographicalDataService) {
    // this.geographicalDataService.getWallsGeoJSON();
  }


  private initMap(): void {
    this.map = L.map('map', {
      zoom: 0,
      minZoom: 13.8,
      maxZoom: 20,
      zoomSnap: 0
    });

    // Set the map option to CRS EPSG3395 as that is the format our geoJSON is in
    this.map.options.crs = L.CRS.EPSG3395;


    this.geographicalDataService.getWallsGeoJSON().subscribe(wallsGeoJSONFromService => {
      this.wallLayer = L.geoJSON(JSON.parse(wallsGeoJSONFromService), {
        style(feature) {
          return { color: feature.properties.color }; // Assign a style based on the geoJSON color property
        }
      }).addTo(this.map);
      // Zoom to wall layer
      this.map.fitBounds(this.wallLayer.getBounds());


    });
    let colorArray = ["green", "blue", "grey", "darkred", "purple", "yellow"]
    this.geographicalDataService.getRoomGeoJSON().subscribe(roomsGeoJSON => {
      L.geoJSON(JSON.parse(roomsGeoJSON), {
        style(feature) {
          return { color: colorArray[feature.properties.color - 1], className: feature.properties.name }; // Assign a style based on the geoJSON color property
        }
      }).addTo(this.map);
    });
    // this.pathLayer = L.geoJSON(pathGeoJSON).addTo(this.map);

    // this.addPoi();

    // Fly to path
    // this.map.flyToBounds(this.pathLayer.getBounds());
    this.addRoomNames(1);

    // region events Wolters ansvar
    this.map.on('click', function (ev) {
      console.log(`Clicked on map`); // ev is an event object (MouseEvent in this case)
      let tmp_room_name = ev.originalEvent.target.innerHTML;
      let room_name = ""
      if (tmp_room_name == "") {
        room_name = ev.originalEvent.target.className.animVal.toString().replace(" leaflet-interactive"," ");
      } else {
        room_name = tmp_room_name;
      }
      console.log(room_name);
    });

    this.map.on('zoomend', (e: Event) => {
      /// console.log(this.map._zoom);
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
    });
    // endregion

  }

  private addRoomNames(size: any): void {
    this.geographicalDataService.getLabelsGeoJSON().subscribe(roomNameGeoJSON => {
      this.roomNameLayer = L.geoJSON(JSON.parse(roomNameGeoJSON), {
        pointToLayer(feature, latlng) {
          return L.marker(latlng, {
            icon: L.divIcon({
              className: 'room_label',
              html: '<p style="font-size: ' + size + 'em"><b>' + feature.properties.name + '</b></p>',
              iconAnchor: [15, 15]
            })
          });
        }
      }).addTo(this.map);
    });

  }

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
          return L.marker(latlng, { icon: doorIcon });
        }
      }).addTo(this.map);
    }
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
