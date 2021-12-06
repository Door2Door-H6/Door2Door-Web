import {Injectable} from '@angular/core';
import { observable, Observable,BehaviorSubject } from 'rxjs';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GeographicalDataService {

  path:BehaviorSubject<string> = new BehaviorSubject("1");

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
  public getPath(startpoiId:number,endpoiName:string) {

    let ops = this.apiService.getJSON('/Path?standId='+ startpoiId + '&roomName='+endpoiName);
    ops.subscribe(x => {
      // console.log(x);
      this.path.next(x);

    })
  }


}
