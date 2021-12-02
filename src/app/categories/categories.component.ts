import {Component} from '@angular/core';
import {CategoryService} from '../../category.service';

@Component({
  selector: 'app-categorys',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
/*
* This class stores and shows all the categorys that are abliable
* */
export class CategoriesComponent {
  panelOpenState = false;
  categories: string[][] = [];

  constructor(private cataeory: CategoryService) {
    this.cataeory.getCategoriesJSON();
    this.cataeory.categories$.subscribe(x => {
      if (x.length > 0) {
        this.categories = JSON.parse(x);
      }

    });
  }

  RouteRoom(event: string): void{
    console.log(event);
  }

}
