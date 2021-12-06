import {Component, OnInit} from '@angular/core';
import {Layer, Map} from 'leaflet';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
/**
 * This class handels the first page in the system.
 */
export class FrontpageComponent implements OnInit {


  constructor() {}

  private map: Map;
  private zoom: number;

  receiveMap(map: Map) {
    this.map = map;
    map.addLayer(new Layer());
  }

  receiveZoom(zoom: number) {
    this.zoom = zoom;
  }

  ngOnInit(): void {
  }
}
