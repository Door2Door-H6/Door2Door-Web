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
  categories: object;

  constructor(private cataeory: CategoryService) {
    this.cataeory.getCategoriesJSON();
    this.cataeory.categories$.subscribe(catagoriesFromService => {
        this.categories = catagoriesFromService;
    });
  }

  RouteRoom(event: string): void{
    console.log(event);
  }

}
