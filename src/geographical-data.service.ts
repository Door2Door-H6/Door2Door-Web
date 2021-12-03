import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GeographicalDataService {
  wallsGeoJSON$: BehaviorSubject<object>;

  constructor(private apiService: ApiService) {
  }

  public getWallsGeoJSON(): void {
    this.apiService.getJSON('/assets/wallsGeoJSON.geojson').then(x => { x.subscribe((geoJSONFromAPI) => {
      console.log(geoJSONFromAPI);
      if (geoJSONFromAPI != null){
        console.log(JSON.stringify(geoJSONFromAPI))
        //this.wallsGeoJSON$.next(geoJSONFromAPI);
      }
    })});
  }
}
