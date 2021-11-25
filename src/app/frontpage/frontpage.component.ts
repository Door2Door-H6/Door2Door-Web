import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  public qrdata: string = null;
  public elementType: 'img' | 'url' | 'canvas' | 'svg' = null;
  public level: 'L' | 'M' | 'Q' | 'H';
  public scale: number;
  public width: number;

  constructor() {
    this.elementType = 'img';
    this.level = 'M';
    this.qrdata = 'https://door2door.dk';
    this.scale = 1;
    this.width = 128;

  }

  ngOnInit(): void {
  }
}
