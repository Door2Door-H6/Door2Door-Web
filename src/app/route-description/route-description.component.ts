import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { GeographicalDataService } from '../../geographical-data.service';
import { RouteDescriptionService } from '../../route-description.service';

@Component({
  selector: 'app-route-description',
  templateUrl: './route-description.component.html',
  styleUrls: ['./route-description.component.scss']
})

export class RouteDescriptionComponent implements OnInit {
  routeDescription: string[];
  endpoi: any;
  path;

  constructor() {

  }


  ngOnInit(): void {
  }

}
