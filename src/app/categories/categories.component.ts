import {Component} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {CategoryService} from '../../category.service';
import { GeographicalDataService } from '../../geographical-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
/*
* This class stores and shows all the categorys that are abliable
* To get a route and show on the map, there is a behaviursubject in the dataservice
*this then gets the path and notifis all subscripers, hence the map opdates with the new rpute.
* */
export class CategoriesComponent {
  panelOpenState = false;
  categories:string;

  public qrdata: string = null;
  public elementType: 'img' | 'url' | 'canvas' | 'svg' = null;
  public level: 'L' | 'M' | 'Q' | 'H';
  public scale: number;
  public width: number;
  public showing = false;
  constructor(private cateory: CategoryService,private dataservice: GeographicalDataService) {
    this.cateory.getCategoriesJSON().subscribe(result => {

      this.categories = result;
    });
    this.dataservice.qrshowing$.subscribe(x=> {this.showing = x});
    this.elementType = 'img';
    this.level = 'M';
    this.qrdata = 'https://door2door.dk';
    this.scale = 1;
    this.width = 128;
  }

  RouteRoom(event: string): void{
    console.log(event);
  }

  catogoriesClick(roomName:string){
    this.dataservice.getPath(2,roomName)


  }

}
