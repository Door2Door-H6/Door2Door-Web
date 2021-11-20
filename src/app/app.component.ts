import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public qrdata: string = null;
  public elementType: "img" | "url" | "canvas" | "svg" = null;
  public level: "L" | "M" | "Q" | "H";
  public scale: number;
  public width: number;

  constructor() {
    this.elementType = "img";
    this.level = "M";
    this.qrdata = "www.door2door.com";
    this.scale = 1;
    this.width = 64;

  }

  title = 'Door2Door';
}
