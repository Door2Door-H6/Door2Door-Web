import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas-map',
  templateUrl: './canvas-map.component.html',
  styleUrls: ['./canvas-map.component.scss']
})
export class CanvasMapComponent implements AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>
  public context: CanvasRenderingContext2D;
  constructor() { }

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
  }

  drawRectable() {

      this.context.fillStyle = "#D74022";
      this.context.fillRect(25, 25, 150, 150);

      this.context.fillStyle = "rgba(0,0,0,0.5)";
      this.context.clearRect(60, 60, 120, 120);
      this.context.strokeRect(90, 90, 80, 80);


  }

}
