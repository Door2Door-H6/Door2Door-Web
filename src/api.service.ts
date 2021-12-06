import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, observable, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // https://door2door.dk:5000
  private baseURL = 'http://10.108.130.228:5000';

  hasChange:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private httpClient: HttpClient) {
  }

  public getJSON(endPoint: string): Observable<any> {
    //console.log(this.httpClient.get(this.baseURL + endPoint));
    return this.httpClient.get(this.baseURL + endPoint)
  }
}
