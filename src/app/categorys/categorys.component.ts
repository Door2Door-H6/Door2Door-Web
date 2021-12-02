import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../category.service';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.scss']
})
export class CategorysComponent implements OnInit {
  panelOpenState = false;
  categories: string[][] = [];

  constructor(private cataeory: CategoryService) {
    this.cataeory.getCategoriesJSON();
    this.cataeory.categories$.subscribe(x => {
      if (x.length > 0){
        this.categories = JSON.parse(x);
        console.log(this.categories);
      }
    });
  }

  ngOnInit(): void {
  }

}
