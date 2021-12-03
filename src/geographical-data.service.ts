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
    return this.apiService.getJSON('/Wall?location=sr');
  }
  public getRoomGeoJSON(): Observable<any> {
    return this.apiService.getJSON('/Room?location=xx');
  }
  public getPoiGeoJSON(): Observable<any> {
    return this.apiService.getJSON('/Poi?location=ss');
  }
  public getLabelsGeoJSON(): Observable<any> {
    return this.apiService.getJSON('/RoomLabel?location=ss');
  }

}
