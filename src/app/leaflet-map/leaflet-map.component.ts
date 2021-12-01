import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements AfterViewInit {

  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [11.783466, 55.427608],
      zoom: 0,
      minZoom: 0,
      maxZoom: 5
    });

    // region Test UI overlays


    // POP UP
    const popup = L.popup()
      .setLatLng([-36.633162, -74.750977])
      .setContent('<p>Du er her</p>')
      .openOn(this.map);

    // CUSTOM MARKER
    const customMarker = L.icon({
      iconUrl: '/assets/marker.png',

      iconSize: [40, 40], // size of the icon
      iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });


    // MARKER
    L.marker([30.86451, -35.375977], {icon: customMarker}).addTo(this.map);
    // L.marker([-23.281719, -74.926758]).addTo(this.map);

    // LINE
    // create a red polyline from an array of LatLng points
    /*
    const latlngs = [
      [-36.633162, -74.750977],
      [-36.633162, -79.321289],
      [-26.000000, -79.321289],
      [-26.000000, -74.926758],
      [-23.281719, -74.926758]
    ];

    const polyline = L.polyline(latlngs, {color: 'red'}).addTo(this.map);
*/

    const latlngs = [
      [-36.633162, -74.750977],
      [-36.633162, -79.321289],
      [-26.000000, -79.321289],
      [-26.000000, -22.543945],
      [27.332735, -22.543945],
      [27.332735, -35.375977],
      [30.86451, -35.375977]
    ];

    const polyline = L.polyline(latlngs, {color: 'blue'}).addTo(this.map);

    // zoom the map to the polyline
    // this.map.fitBounds(polyline.getBounds());

    this.map.on('click', function(ev) {
      console.log(`Clicked on map ${ev.latlng}`); // ev is an event object (MouseEvent in this case)
    });

    // create a red polygon from an array of LatLng points
    const latlngsPolygon = [[-14, -84.946289], [-24.25, -84.946289], [-24.25, -72.290039], [-14, -72.290039]];

    const polygon = L.polygon(latlngsPolygon, {color: 'green'}).addTo(this.map);

    // zoom the map to the polygon
    // this.map.fitBounds(polygon.getBounds());

    // endregion

    //region Add openstreetmap tiles
    // https://door2door.dk/assets/zbc_map_tiles/tile_{x}_{y}_{z}.png
    // http://localhost:8000/tile_{x}_{y}_{z}.png

    const tiles = L.tileLayer('https://door2door.dk/assets/zbc_map_tiles/tile_{x}_{y}_{z}.png', {

      maxZoom: 5,
      minZoom: 0,
      attribution: '<a href="/map">Fullscreen map</a>'
    });

    tiles.addTo(this.map);
    //endregion
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
