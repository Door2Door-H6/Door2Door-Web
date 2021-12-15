import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RouteDescriptionService {

  constructor(private apiService: ApiService) { }

  public GetRouteDescription(location: string): Observable<string> {
    return Observable.create(function (observer) {
      observer.next('Drej til hjøre\nFølg gangen til enden\n' + location + ' til højre');
      observer.complete();
    });
  }
}
