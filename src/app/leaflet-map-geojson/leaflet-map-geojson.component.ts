import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map-geojson',
  templateUrl: './leaflet-map-geojson.component.html',
  styleUrls: ['./leaflet-map-geojson.component.scss']
})
export class LeafletMapGeojsonComponent implements AfterViewInit {

  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [11.783466, 55.427608],
      zoom: 0,
      minZoom: -100,
      maxZoom: 100
    });

    // region Test UI overlays
    // GEOJSON
    // region geojson test
    const geoJson = {
      type: 'FeatureCollection',
      name: 'MuchSmallerLayout',
      crs: {type: 'name', properties: {name: 'urn:ogc:def:crs:OGC:1.3:CRS84'}},
      features: [
        {
          type: 'Feature',
          properties: {
            fid: 1,
            handle: 74,
            block: -1,
            etype: 18,
            space: 0,
            layer: 'walls',
            olinetype: 'ByLayer',
            linetype: '',
            color: '255,255,0,254',
            ocolor: 256,
            color24: -1,
            transparency: 0,
            lweight: -1,
            linewidth: 0.0,
            ltscale: 1.0,
            visible: 1,
            width: 0.0,
            thickness: 0.0,
            ext: '(3:0,0,0.1)'
          },
          geometry: {
            type: 'LineString',
            coordinates: [[11.181777938229281, 54.808586935958786, 0.0], [11.181690243664985, 54.810900294191867, 0.0], [11.178272545798304, 54.810967197926928, 0.0], [11.178095520261824, 54.815768287436534, 0.0], [11.182034700850972, 54.815880665968578, 0.0], [11.185688252523546, 55.087006771043185, 0.0], [11.148673099486395, 55.086907686101888, 0.0], [11.14918122, 55.14094613, 0.0], [11.1516684, 55.14094613, 0.0], [11.1516684, 55.13974593, 0.0], [11.15038142, 55.13974593, 0.0], [11.150301741233775, 55.089054477732773, 0.0], [11.185100751233776, 55.089054477732773, 0.0], [11.18518043, 55.11464148, 0.0], [11.1612008, 55.11464148, 0.0], [11.1612008, 55.11584168, 0.0], [11.161201, 55.11584168, 0.0], [11.161201, 55.13974593, 0.0], [11.1606684, 55.13974593, 0.0], [11.1606684, 55.14094613, 0.0], [11.16317059, 55.14094613, 0.0], [11.16317059, 55.13974593, 0.0], [11.1624012, 55.13974593, 0.0], [11.1624012, 55.11584168, 0.0], [11.17327291, 55.11584168, 0.0], [11.17327291, 55.13974593, 0.0], [11.17217059, 55.13974593, 0.0], [11.17217059, 55.14094613, 0.0], [11.17565217, 55.14094613, 0.0], [11.17565217, 55.13974593, 0.0], [11.17447311, 55.13974593, 0.0], [11.17447311, 55.11584168, 0.0], [11.18518043, 55.11584168, 0.0], [11.18518043, 55.13974593, 0.0], [11.18465217, 55.13974593, 0.0], [11.18465217, 55.14094613, 0.0], [11.18518053, 55.14094613, 0.0], [11.18518053, 55.14094603, 0.0], [11.32757381, 55.14094603, 0.0], [11.32757381, 55.13934603, 0.0], [11.3212705, 55.13934603, 0.0], [11.3212705, 55.13884603, 0.0], [11.32757381, 55.13884603, 0.0], [11.32757381, 55.13724603, 0.0], [11.18888043, 55.13724603, 0.0], [11.184652439522081, 54.813210015969524, 0.0], [11.488298019522082, 54.813210015969524, 0.0], [11.49252601, 55.13724603, 0.0], [11.34018043, 55.13724603, 0.0], [11.34018043, 55.13884803, 0.0], [11.34648374, 55.13884803, 0.0], [11.34648374, 55.13934803, 0.0], [11.34018043, 55.13934803, 0.0], [11.34018043, 55.14094603, 0.0], [11.37386464, 55.14094603, 0.0], [11.37386464, 55.14130525, 0.0], [11.37506484, 55.14130525, 0.0], [11.37506484, 55.14094603, 0.0], [11.489993, 55.14094603, 0.0], [11.489993, 55.14193206, 0.0], [11.493693, 55.14193206, 0.0], [11.493693, 55.14077762, 0.0], [11.49372621, 55.14077762, 0.0], [11.491182316209693, 54.809707395304976, 0.0], [11.181777938229281, 54.808586935958786, 0.0]]
          }
        },
        {
          type: 'Feature',
          properties: {
            fid: 2,
            handle: 75,
            block: -1,
            etype: 18,
            space: 0,
            layer: 'walls',
            olinetype: 'ByLayer',
            linetype: '',
            color: '255,255,0,254',
            ocolor: 256,
            color24: -1,
            transparency: 0,
            lweight: -1,
            linewidth: 0.0,
            ltscale: 1.0,
            visible: 1,
            width: 0.0,
            thickness: 0.0,
            ext: '(3:0,0,0.1)'
          },
          geometry: {
            type: 'LineString',
            coordinates: [[11.013198429920285, 55.159440319865077, 0.0], [11.047855567563978, 55.160340570980807, 0.0], [11.047424556401459, 55.237406772704894, 0.0], [10.952498415552082, 55.236267870518894, 0.0], [10.952498415552082, 55.160267970518895, 0.0], [11.001497637850129, 55.159720530810418, 0.0], [11.001497637850129, 55.158520330810418, 0.0], [10.992845837850128, 55.158520330810418, 0.0], [10.992845738223602, 55.153027895543502, 0.0], [10.991259364261241, 55.153052923092766, 0.0], [10.991365328272076, 55.158496536884961, 0.0], [10.952431295391264, 55.158890374952264, 0.0], [10.952226619760824, 55.139548721654371, 0.0], [10.991086756235292, 55.140385903810142, 0.0], [10.991309283247892, 55.146305414732211, 0.0], [10.992789792825944, 55.146329208657669, 0.0], [10.992736651129414, 55.140356611887064, 0.0], [11.018871522637218, 55.140494649896567, 0.0], [11.018617096439305, 54.811319485568539, 0.0], [11.129124837113716, 54.81285850383297, 0.0], [11.128263235369456, 55.123846738933509, 0.0], [11.131918420263268, 55.123836265701094, 0.0], [11.132472341016959, 54.808422336335113, 0.0], [11.015654438174144, 54.807298955107903, 0.0], [11.015531718547512, 55.138583161950677, 0.0], [10.949671442244288, 55.1381084259286, 0.0], [10.949617698697047, 55.238096620362164, 0.0], [11.24214809, 55.24155202, 0.0], [11.24214809, 55.23785202, 0.0], [11.1716362, 55.23785202, 0.0], [11.17165767, 55.18087071, 0.0], [11.17045747, 55.18087026, 0.0], [11.170436, 55.23785166, 0.0], [11.17022584419867, 55.237857673883468, 0.0], [11.049732936486137, 55.2375226997517, 0.0], [11.050758466189217, 55.160386666100543, 0.0], [11.15863119, 55.16185212, 0.0], [11.15863119, 55.16065192, 0.0], [11.013198429920285, 55.158240119865077, 0.0], [11.013198429920285, 55.159440319865077, 0.0]]
          }
        },
        {
          type: 'Feature',
          properties: {
            fid: 3,
            handle: 76,
            block: -1,
            etype: 18,
            space: 0,
            layer: 'walls',
            olinetype: 'ByLayer',
            linetype: '',
            color: '255,255,0,254',
            ocolor: 256,
            color24: -1,
            transparency: 0,
            lweight: -1,
            linewidth: 0.0,
            ltscale: 1.0,
            visible: 1,
            width: 0.0,
            thickness: 0.0,
            ext: '(3:0,0,0.1)'
          },
          geometry: {type: 'LineString', coordinates: []}
        },
        {
          type: 'Feature',
          properties: {
            fid: 4,
            handle: 77,
            block: -1,
            etype: 18,
            space: 0,
            layer: 'walls',
            olinetype: 'ByLayer',
            linetype: '',
            color: '255,255,0,254',
            ocolor: 256,
            color24: -1,
            transparency: 0,
            lweight: -1,
            linewidth: 0.0,
            ltscale: 1.0,
            visible: 1,
            width: 0.0,
            thickness: 0.0,
            ext: '(3:0,0,0.1)'
          },
          geometry: {
            type: 'LineString',
            coordinates: [[11.45124257, 55.21738397, 0.0], [11.45125495, 55.21618404, 0.0], [11.45125495, 55.19805212, 0.0], [11.45606474, 55.19805212, 0.0], [11.45606474, 55.19685192, 0.0], [11.45005475, 55.19685192, 0.0], [11.45005475, 55.21617145, 0.0], [11.44006484, 55.21606835, 0.0], [11.44006484, 55.19805212, 0.0], [11.44109597, 55.19805212, 0.0], [11.44109597, 55.19685192, 0.0], [11.44006484, 55.19685192, 0.0], [11.44006484, 55.19382323, 0.0], [11.43886464, 55.19382323, 0.0], [11.43886464, 55.19685192, 0.0], [11.43664845, 55.19685192, 0.0], [11.43664845, 55.19805212, 0.0], [11.43886464, 55.19805212, 0.0], [11.43886464, 55.23785202, 0.0], [11.40506484, 55.23785202, 0.0], [11.40506484, 55.19805212, 0.0], [11.42764845, 55.19805212, 0.0], [11.42764845, 55.19685192, 0.0], [11.40506484, 55.19685192, 0.0], [11.40506484, 55.18421812, 0.0], [11.40386464, 55.18421812, 0.0], [11.40386464, 55.23785202, 0.0], [11.37506484, 55.23785202, 0.0], [11.37506484, 55.18383392, 0.0], [11.37386464, 55.18383392, 0.0], [11.37386464, 55.20730749, 0.0], [11.36336474, 55.20730749, 0.0], [11.36336474, 55.20850769, 0.0], [11.37386464, 55.20850769, 0.0], [11.37386464, 55.23785202, 0.0], [11.34506484, 55.23785202, 0.0], [11.34506484, 55.20850769, 0.0], [11.35436474, 55.20850769, 0.0], [11.35436474, 55.20730749, 0.0], [11.34506484, 55.20730749, 0.0], [11.34506484, 55.18344971, 0.0], [11.34386464, 55.18344971, 0.0], [11.34386464, 55.23785202, 0.0], [11.25886484, 55.23785202, 0.0], [11.25886484, 55.16185212, 0.0], [11.32789942, 55.16185212, 0.0], [11.32789942, 55.16065192, 0.0], [11.25045347, 55.16065192, 0.0], [11.25045347, 55.16185212, 0.0], [11.25766464, 55.16185212, 0.0], [11.25766464, 55.23785202, 0.0], [11.25114809, 55.23785202, 0.0], [11.25114809, 55.24155202, 0.0], [11.493693, 55.24155202, 0.0], [11.493693, 55.15991547, 0.0], [11.489993, 55.15991547, 0.0], [11.489993, 55.16045646, 0.0], [11.4590599, 55.16057755, 0.0], [11.45906459, 55.16177774, 0.0], [11.489993, 55.16165667, 0.0], [11.489993, 55.19685192, 0.0], [11.46506474, 55.19685192, 0.0], [11.46506474, 55.19805212, 0.0], [11.489993, 55.19805212, 0.0], [11.489993, 55.23785202, 0.0], [11.44006484, 55.23785202, 0.0], [11.44006484, 55.21726862, 0.0], [11.45124257, 55.21738397, 0.0]]
          }
        },
        {
          type: 'Feature',
          properties: {
            fid: 5,
            handle: 78,
            block: -1,
            etype: 18,
            space: 0,
            layer: 'walls',
            olinetype: 'ByLayer',
            linetype: '',
            color: '255,255,0,254',
            ocolor: 256,
            color24: -1,
            transparency: 0,
            lweight: -1,
            linewidth: 0.0,
            ltscale: 1.0,
            visible: 1,
            width: 0.0,
            thickness: 0.0,
            ext: '(3:0,0,0.1)'
          },
          geometry: {
            type: 'LineString',
            coordinates: [[11.37506484, 55.16065192, 0.0], [11.37506484, 55.1602928, 0.0], [11.37386464, 55.1602928, 0.0], [11.37386464, 55.16065192, 0.0], [11.33689942, 55.16065192, 0.0], [11.33689942, 55.16185212, 0.0], [11.34386464, 55.16185212, 0.0], [11.34386464, 55.17444971, 0.0], [11.34506484, 55.17444971, 0.0], [11.34506484, 55.16185212, 0.0], [11.37386464, 55.16185212, 0.0], [11.37386464, 55.17483392, 0.0], [11.37506484, 55.17483392, 0.0], [11.37506484, 55.16185212, 0.0], [11.40386464, 55.16185212, 0.0], [11.40386464, 55.17521812, 0.0], [11.40506484, 55.17521812, 0.0], [11.40506484, 55.16185212, 0.0], [11.43886464, 55.16185212, 0.0], [11.43886464, 55.18482323, 0.0], [11.44006484, 55.18482323, 0.0], [11.44006484, 55.16065192, 0.0], [11.37506484, 55.16065192, 0.0]]
          }
        },
        {
          type: 'Feature',
          properties: {
            fid: 6,
            handle: 79,
            block: -1,
            etype: 18,
            space: 0,
            layer: 'walls',
            olinetype: 'ByLayer',
            linetype: '',
            color: '255,255,0,254',
            ocolor: 256,
            color24: -1,
            transparency: 0,
            lweight: -1,
            linewidth: 0.0,
            ltscale: 1.0,
            visible: 1,
            width: 0.0,
            thickness: 0.0,
            ext: '(3:0,0,0.1)'
          },
          geometry: {
            type: 'LineString',
            coordinates: [[11.24145347, 55.16065192, 0.0], [11.16763119, 55.16065192, 0.0], [11.16763119, 55.16185212, 0.0], [11.17046464, 55.16185212, 0.0], [11.17046086, 55.17187026, 0.0], [11.17166106, 55.17187071, 0.0], [11.17166484, 55.16185212, 0.0], [11.24145347, 55.16185212, 0.0], [11.24145347, 55.16065192, 0.0]]
          }
        },
        {
          type: 'Feature',
          properties: {
            fid: 7,
            handle: null,
            block: null,
            etype: null,
            space: null,
            layer: null,
            olinetype: null,
            linetype: null,
            color: null,
            ocolor: null,
            color24: null,
            transparency: null,
            lweight: null,
            linewidth: null,
            ltscale: null,
            visible: null,
            width: null,
            thickness: null,
            ext: null
          },
          geometry: {
            type: 'LineString',
            coordinates: [[11.018871522637218, 55.140494649896567, 0.0], [11.131877631239377, 55.140989574350783, 0.0], [11.13195249245352, 55.129999094465013, 0.0], [11.128634426479559, 55.129996235197751, 0.0], [11.128695404905823, 55.138565405068817, 0.0], [11.018733391803845, 55.138388909800241, 0.0]]
          }
        }
      ]
    };
    // endregion

    const jsonLayer = L.geoJSON(geoJson).addTo(this.map);

    this.map.fitBounds(jsonLayer.getBounds());
    /*
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
    /*const latlngs = [
      [-36.633162, -74.750977],
      [-36.633162, -79.321289],
      [-26.000000, -79.321289],
      [-26.000000, -74.926758],
      [-23.281719, -74.926758]
    ];

    const polyline = L.polyline(latlngs, {color: 'red'}).addTo(this.map);


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

*/
    // endregion

    //region Add openstreetmap tiles
    // https://door2door.dk/assets/zbc_map_tiles/tile_{x}_{y}_{z}.png
    // http://localhost:8000/tile_{x}_{y}_{z}.png
    /*
    const tiles = L.tileLayer('http://localhost:8000/zbc.svg', {

      maxZoom: 5,
      minZoom: 0,
      attribution: '<a href="/map">Fullscreen map</a>'
    });

    tiles.addTo(this.map);
     */
    //endregion
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
