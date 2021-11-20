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

    // this.context.fillStyle = "#D74022";
    // this.context.fillRect(25, 25, 150, 150);

    // this.context.fillStyle = "rgba(0,0,0,0.5)";
    // this.context.clearRect(60, 60, 120, 120);
    // this.context.strokeRect(90, 90, 80, 80);
    // this.context.strokeStyle = "black";

    this.context.shadowColor = "grey";
    this.context.shadowOffsetX = 5;

    this.context.beginPath();
    this.context.moveTo(0, 0);
    this.context.lineTo(0, 50);
    this.context.stroke();
    //Horizantal line X0 => X50
    this.context.moveTo(0, 0);
    this.context.lineTo(50, 0);
    this.context.strokeStyle = "blue";
    this.context.stroke();

    this.context.moveTo(50, 0);
    this.context.lineTo(0, 50);
    this.context.stroke();

// Testing 2 line
    this.context.moveTo(0, 50);
    this.context.lineTo(50, 100);
    this.context.stroke();
    //Horizantal line X0 => X50
    this.context.moveTo(100, 50);
    this.context.lineTo(50, 0);
    this.context.stroke();

    this.context.moveTo(100, 50);
    this.context.lineTo(50, 100);
    this.context.stroke();

  }

}
