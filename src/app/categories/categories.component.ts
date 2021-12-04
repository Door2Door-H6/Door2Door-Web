import {Component} from '@angular/core';
import {CategoryService} from '../../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
/*
* This class stores and shows all the categorys that are abliable
* */
export class CategoriesComponent {
  panelOpenState = false;
  categories:string;

  constructor(private cateory: CategoryService) {
    this.cateory.getCategoriesJSON().subscribe(result => {
      console.log(result);
      this.categories = result;
    });
  }

  RouteRoom(event: string): void{
    console.log(event);
  }

}
