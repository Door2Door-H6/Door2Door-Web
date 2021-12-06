import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoryService } from '../../category.service';
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

  /*-------Componet variables--------*/
  panelOpenState = false;
  categories: string;
  /*-------End Componet variables--------*/
  iconArray = ["edit", "wc", "collections", "meeting_room", "storage"];
  colorArray = ["blue", "grey", "darkred", "purple", "#36003d", "red"]
  /*-------QR code variables--------*/
  public qrdata = 'https://door2door.dk/qr/'+this.dataservice.endpoi$;
  public elementType: 'img' = null;
  public level: 'M';
  public scale = 1;
  public width = 128;
  public showing = false;
  /*-------End code variables--------*/

  constructor(private cateory: CategoryService, private dataservice: GeographicalDataService) {
    this.cateory.getCategoriesJSON().subscribe(result => {this.categories = result;});
    this.dataservice.qrshowing$.subscribe(x => { this.showing = x }); // a simple boolan to show the qr code.
  }

  /**
   * calls the api for a route to the subllyed point
   * (Note: this do not return rather it calls the service whcine then opdates the behavioursubject.)
   * @param roomName the room/piont to navigate too.
   */
  catogoriesClick(roomName: string) {
    this.dataservice.getPath(2, roomName);
  }

}
