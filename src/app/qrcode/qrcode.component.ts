import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeographicalDataService } from '../../geographical-data.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  endpoi: any;
  path: string;
  pathlayer: any;
  map: any;
  wallLayer: any;

  constructor(private dataserive: GeographicalDataService, private route: ActivatedRoute) {
    this.endpoi = this.route.snapshot.paramMap.get("endpoi");
    this.dataserive.getPath(2, this.endpoi);
    // console.log(this.endpoi)
    this.dataserive.path.subscribe(path => {
      this.path = path;
      if (path != "1") {

        // console.log(path);
      }
    });
  }

  ngOnInit(): void {
    this.startMap();
  }

  startMap() {

    if (false) {

      this.pathlayer = L.geoJSON(JSON.parse(this.path), {
        style(feature) {
          return {
            color: "blue",
            weight: 2,
            fillOpacity: 0.6
          };
        }
      }).addTo(this.map);
    }
  }

}
