import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GeographicalDataService {

  constructor(private apiService: ApiService) {
  }

  public getWallsGeoJSON(): Observable<any> {
    return this.apiService.getJSON('/assets/wallsGeoJSON.geojson');
  }
}
