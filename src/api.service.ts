import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, observable, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // http://localhost:4200
  // http://10.108.130.228:5000
  private baseURL = 'https://door2door.dk:5001';

  hasChange:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private httpClient: HttpClient) {
  }

  public getJSON(endPoint: string): Observable<any> {
    //console.log(this.httpClient.get(this.baseURL + endPoint));
    return this.httpClient.get(this.baseURL + endPoint)
  }
}
