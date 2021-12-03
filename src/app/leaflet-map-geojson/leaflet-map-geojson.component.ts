import {AfterViewInit, Component, OnInit} from '@angular/core';
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
    this.geographicalDataService.getWallsGeoJSON();
    this.geographicalDataService.wallsGeoJSON$.subscribe(wallsGeoJSONFromService => {
        console.log(wallsGeoJSONFromService);
        this.wallLayer = L.geoJSON(wallsGeoJSONFromService, {
          style(feature) {
            return {color: feature.properties.color}; // Assign a style based on the geoJSON color property
          }
        }).addTo(this.map);
    });
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

    // region GeoJSON
    const roomsGeoJSON = {
      type: 'FeatureCollection',
      name: 'RoomsWithAutoColor',
      crs: {type: 'name', properties: {name: 'urn:ogc:def:crs:OGC:1.3:CRS84'}},
      features: [
        {type: 'Feature', properties: {id: null, name: null, color: null}, geometry: {type: 'MultiPolygon', coordinates: []}},
        {
          type: 'Feature',
          properties: {id: 1, name: 'B16', color: 'green'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.00856856596453, 0.021510610514101], [0.015824362718936, 0.021510577956802], [0.01582693549391, 0.014637411882942], [0.00856856596453, 0.014637411882942], [0.00856856596453, 0.021510610514101]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 2, name: 'B24', color: 'green'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.000846212997641, 0.021510610514101], [0.008460750164129, 0.021510610514101], [0.008460750164129, 0.014637411882942], [0.000846212997641, 0.014637411882942], [0.000846212997641, 0.021510610514101]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 3, name: 'B25', color: 'green'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.015932178519336, 0.021510610514101], [0.023660244771432, 0.021510610514101], [0.023660244771432, 0.014637411882942], [0.01593475129431, 0.014637411882942], [0.015932178519336, 0.021510610514101]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 4, name: 'B26', color: 'green'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.023768060571832, 0.021510610514101], [0.031403722520542, 0.021510610514101], [0.031403722520542, 0.014637411882942], [0.023768060571832, 0.014637411882942], [0.023768060571832, 0.021510610514101]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 5, name: 'B30', color: 'green'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.005823548916549, 0.012638195591449], [0.012108042270002, 0.012638195591449], [0.012108076698769, 0.000980670058879], [0.005823548916549, 0.000980677792271], [0.005823548916549, 0.012638195591449]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 6, name: 'Wc1', color: 'blue'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.015102584354451, 0.012638195591449], [0.016079207578518, 0.012638195591449], [0.016079207578518, 0.0104763673246], [0.015102584354451, 0.0104763673246], [0.015102584354451, 0.012638195591449]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 7, name: 'Wc2', color: 'blue'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.016187023378918, 0.0104763673246], [0.016187023378918, 0.012638195591449], [0.017148877401399, 0.012638195591449], [0.017148877401399, 0.0104763673246], [0.016187023378918, 0.0104763673246]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 8, name: 'Wc3', color: 'blue'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.014022829145876, 0.012638195591449], [0.014994768554051, 0.012638195591449], [0.014994750587746, 0.010367824901784], [0.017148877401399, 0.010367824901784], [0.017148877401399, 0.007238747245639], [0.014022829145876, 0.007238747245639], [0.014022829145876, 0.012638195591449]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 9, name: 'Atrium', color: 'grey'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.017481254056523, 0.012412112271355], [0.044758200603457, 0.012412112271355], [0.044758200603457, 0.000754130525187], [0.017481254056523, 0.000754130525187], [0.017481254056523, 0.012412112271355]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 10, name: 'B12 kontor', color: 'grey'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.031511538320942, 0.021510610514101], [0.034098668372901, 0.021510610514101], [0.034098668372901, 0.018856798139191], [0.031511538320942, 0.018856798139191], [0.031511538320942, 0.021510610514101]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 11, name: 'B12', color: 'green'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.031511538320942, 0.018748255720478], [0.034098668372901, 0.018748255720478], [0.034098668372901, 0.014637411882942], [0.031511538320942, 0.014637411882942], [0.031511538320942, 0.018748255720478]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 12, name: 'B10', color: 'green'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.034206484173301, 0.021510610514101], [0.036793614225259, 0.021510610514101], [0.036793614225259, 0.014637410978572], [0.034206484173301, 0.014637411882942], [0.034206484173301, 0.021510610514101]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 13, name: 'B10-Køkken', color: 'grey'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.036901430025659, 0.021510610514101], [0.039937717719678, 0.021510610514101], [0.039937717719678, 0.017911229255581], [0.036901430025659, 0.017911229255581], [0.036901430025659, 0.021510610514101]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 14, name: 'B08 indgang', color: 'grey'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.036901430025659, 0.017802686836287], [0.039937717719678, 0.017802686836287], [0.039937717719678, 0.014637411882942], [0.036901430025659, 0.014637411882942], [0.036901430025659, 0.017802686836287]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 15, name: 'B gang trappe', color: 'grey'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.044530656443674, 0.017585789073557], [0.042324835394706, 0.017585789073557], [0.042342629880941, 0.015085663757519], [0.044530656443674, 0.015085663757519], [0.044530656443674, 0.017585789073557]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 16, name: 'B02', color: 'green'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.040045533520078, 0.021510610514101], [0.044530656443674, 0.021510610514101], [0.044530656443674, 0.017911229255581], [0.041050758204475, 0.017911229255581], [0.041049646090154, 0.019659542667776], [0.040045533520078, 0.019649109862111], [0.040045533520078, 0.021510610514101]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 17, name: 'B02 wc', color: 'blue'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.040045533520078, 0.017911229255581], [0.040045533520078, 0.019540562017692], [0.040942942404075, 0.019549885162081], [0.040942942404075, 0.017919435690466], [0.040045533520078, 0.017911229255581]]]]
          }
        },
        {
          type: 'Feature',
          properties: {id: 18, name: 'B depot', color: 'grey'},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[0.007516546240351, 0.014528869461869], [0.007516545342036, 0.012746738013385], [0.000846212997641, 0.012746728969691], [0.000846212997641, 0.014528869461869], [0.007516546240351, 0.014528869461869]]]]
          }
        }
      ]
    };

    this.poiGeoJSON = {
      type: 'FeatureCollection',
      name: 'PoiColor',
      crs: {type: 'name', properties: {name: 'urn:ogc:def:crs:OGC:1.3:CRS84'}},
      features: [
        {
          type: 'Feature',
          properties: {id: 1, name: 'Door B30', type: 1},
          geometry: {type: 'Point', coordinates: [0.0121080444777, 0.011890672545024]}
        },
        {
          type: 'Feature',
          properties: {id: 2, name: 'wc3 door', type: 2},
          geometry: {type: 'Point', coordinates: [0.01451197642889, 0.012638195591449]}
        },
        {
          type: 'Feature',
          properties: {id: 3, name: 'wc1 door', type: 2},
          geometry: {type: 'Point', coordinates: [0.015563151047722, 0.012638195591449]}
        },
        {
          type: 'Feature',
          properties: {id: 4, name: 'wc3 door', type: 2},
          geometry: {type: 'Point', coordinates: [0.016687013273176, 0.012638195591449]}
        },
        {
          type: 'Feature',
          properties: {id: 5, name: 'B24 Door', type: 1},
          geometry: {type: 'Point', coordinates: [0.008059553502651, 0.014637411882942]}
        },
        {
          type: 'Feature',
          properties: {id: 5, name: 'B24 door', type: 1},
          geometry: {type: 'Point', coordinates: [0.015160573534127, 0.014637411882942]}
        },
        {
          type: 'Feature',
          properties: {id: 6, name: 'B25', type: 1},
          geometry: {type: 'Point', coordinates: [0.022619440244354, 0.014637411882942]}
        },
        {
          type: 'Feature',
          properties: {id: 6, name: 'InfoStander', type: 3},
          geometry: {type: 'Point', coordinates: [0.015641430008699, 0.005960481864046]}
        },
        {
          type: 'Feature',
          properties: {id: 9, name: 'B Depot dør', type: 1},
          geometry: {type: 'Point', coordinates: [0.007516545803443, 0.013662104880035]}
        },
        {
          type: 'Feature',
          properties: {id: 10, name: 'B14 Dør', type: 1},
          geometry: {type: 'Point', coordinates: [0.030380286509362, 0.014637411882942]}
        },
        {
          type: 'Feature',
          properties: {id: 11, name: 'B14,B12 dør', type: 1},
          geometry: {type: 'Point', coordinates: [0.031464638014316, 0.016193370525657]}
        },
        {
          type: 'Feature',
          properties: {id: 12, name: 'B12 kontor,B12 dør', type: 1},
          geometry: {type: 'Point', coordinates: [0.032740280246298, 0.018801374914496]}
        },
        {
          type: 'Feature',
          properties: {id: 13, name: 'B12,B10 dør', type: 1},
          geometry: {type: 'Point', coordinates: [0.034156054057382, 0.016250090450531]}
        },
        {
          type: 'Feature',
          properties: {id: 14, name: 'B10,B08 dør', type: 1},
          geometry: {type: 'Point', coordinates: [0.036851918722008, 0.016272333558325]}
        },
        {
          type: 'Feature',
          properties: {id: 15, name: 'B08,B08 køkken dør', type: 1},
          geometry: {type: 'Point', coordinates: [0.039314230754796, 0.017856042833253]}
        },
        {
          type: 'Feature',
          properties: {id: 16, name: 'B08 dør', type: 1},
          geometry: {type: 'Point', coordinates: [0.039937717719678, 0.017157609248524]}
        },
        {
          type: 'Feature',
          properties: {id: 17, name: 'B02 wc dør', type: 1},
          geometry: {type: 'Point', coordinates: [0.040513160034591, 0.017915505507589]}
        },
        {
          type: 'Feature',
          properties: {id: 18, name: 'B02 dør', type: 1},
          geometry: {type: 'Point', coordinates: [0.041878861083437, 0.017911229255581]}
        },
        {
          type: 'Feature',
          properties: {id: 19, name: 'B trappe til kælder', type: 4},
          geometry: {type: 'Point', coordinates: [0.042056805945789, 0.015440441326832]}
        },
        {
          type: 'Feature',
          properties: {id: 20, name: 'Atriumgård dør', type: 1},
          geometry: {type: 'Point', coordinates: [0.030508184379177, 0.012557734556738]}
        }
      ]
    };

    const pathGeoJSON = {
      type: 'FeatureCollection',
      name: 'Route Info Til B14',
      crs: {type: 'name', properties: {name: 'urn:ogc:def:crs:OGC:1.3:CRS84'}},
      features: [
        {
          type: 'Feature',
          properties: {start: '0.013064, 0.001463', end: '0.034073, 0.013709', cost: 0.033195932008602005},
          geometry: {
            type: 'LineString',
            coordinates: [[0.013064364985178, 0.001463272751212], [0.013053996937218, 0.005994109709574], [0.013040471481561, 0.011904733831849], [0.013036353085429, 0.013704472941332], [0.015130245651886, 0.01370494645842], [0.022651432431404, 0.01370664731477], [0.030557793898435, 0.013708435275301], [0.03407299994794, 0.013709230211088]]
          }
        }
      ]
    };

    this.roomNameGeoJSON = [{
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.00417235228894892, 0.01821955892692859]},
      properties: {id: 1, name: 'B26', type: 'Point', wkt: 'POINT (0.00417235228894892 0.01821955892692859)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.0119245528986985, 0.018049802709196851]},
      properties: {id: 2, name: 'B24', type: 'Point', wkt: 'POINT (0.0119245528986985 0.018049802709196851)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.019789924320269239, 0.018106388115107432]},
      properties: {id: 3, name: 'B16', type: 'Point', wkt: 'POINT (0.019789924320269239 0.018106388115107432)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.02754212493001882, 0.018049802709196851]},
      properties: {id: 4, name: 'B14', type: 'Point', wkt: 'POINT (0.02754212493001882 0.018049802709196851)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.032776274976747552, 0.016529069925349991]},
      properties: {id: 5, name: 'B12', type: 'Point', wkt: 'POINT (0.032776274976747552 0.016529069925349991)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.032776274976747552, 0.020320292121358909]},
      properties: {id: 6, name: 'B12 Kontor', type: 'Point', wkt: 'POINT (0.032776274976747552 0.020320292121358909)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.03546408175750014, 0.018339802914488581]},
      properties: {id: 7, name: 'B10', type: 'Point', wkt: 'POINT (0.03546408175750014 0.018339802914488581)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.03843481556780564, 0.01969785265634252]},
      properties: {id: 8, name: 'B08 Køkken', type: 'Point', wkt: 'POINT (0.03843481556780564 0.01969785265634252)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.038349937458939769, 0.016048093975110051]},
      properties: {id: 9, name: 'B08', type: 'Point', wkt: 'POINT (0.038349937458939769 0.016048093975110051)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.042480672090412168, 0.019839316171118969]},
      properties: {id: 10, name: 'B02', type: 'Point', wkt: 'POINT (0.042480672090412168 0.019839316171118969)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.02983383386939735, 0.0067397947028195]},
      properties: {id: 11, name: 'Atrium', type: 'Point', wkt: 'POINT (0.02983383386939735 0.0067397947028195)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.015546018876975669, 0.011591993259651819]},
      properties: {id: 12, name: 'Wc 2', type: 'Point', wkt: 'POINT (0.015546018876975669 0.011591993259651819)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.016635287940754351, 0.01163443231408475]},
      properties: {id: 13, name: 'wc 3', type: 'Point', wkt: 'POINT (0.016635287940754351 0.01163443231408475)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.015432848065154509, 0.00887589377594393]},
      properties: {id: 14, name: 'Wc 1', type: 'Point', wkt: 'POINT (0.015432848065154509 0.00887589377594393)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.00868503841031775, 0.00693784362350654]},
      properties: {id: 15, name: 'B30', type: 'Point', wkt: 'POINT (0.00868503841031775 0.00693784362350654)'}
    }, {
      type: 'Feature',
      geometry: {type: 'Point', coordinates: [0.00384698620496308, 0.01369979962982096]},
      properties: {id: 16, name: 'Depot', type: 'Point', wkt: 'POINT (0.00384698620496308 0.01369979962982096)'}
    }];

    // endregion

    L.geoJSON(roomsGeoJSON, {
      style(feature) {
        return {color: feature.properties.color, title: feature.properties.name}; // Assign a style based on the geoJSON color property
      }
    }).addTo(this.map);

    // this.pathLayer = L.geoJSON(pathGeoJSON).addTo(this.map);

    // this.addPoi();

    // Zoom to wall layer
    this.map.fitBounds(this.wallLayer.getBounds());

    // Fly to path
    // this.map.flyToBounds(this.pathLayer.getBounds());
    this.addRoomNames(1);

    // region events
    this.map.on('click', function(ev) {
      console.log(`Clicked on map`); // ev is an event object (MouseEvent in this case)
      console.log(ev);
    });

    this.map.on('zoomend', (e: Event) => {
      /// console.log(this.map._zoom);
      this.roomNameLayer.clearLayers();
      let a = this.map._zoom - 13.3;
      console.log(a);
      this.addRoomNames(a);
      if (this.map._zoom > this.zoomLevelRemoveIcons) {
        this.addPoi();

        if (this.previousZoomLevel < this.map._zoom){

        }
      } else {
        if (this.previousZoomLevel > this.map._zoom){
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
      this.roomNameLayer = L.geoJSON(this.roomNameGeoJSON, {
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
  }

  private addPoi(): void {
    if (this.poiLayer == null){
      const doorIcon = L.icon({
        iconUrl: '/assets/door_white.png',

        iconSize: [30, 30], // size of the icon
        iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
      });

      this.poiLayer = L.geoJSON(this.poiGeoJSON, {
        pointToLayer(feature, latlng) {
          return L.marker(latlng, {icon: doorIcon});
        }
      }).addTo(this.map);
    }
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
