import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // https://door2door.dk:5000
  private baseURL = 'http://localhost:4200';

  constructor(private httpClient: HttpClient) {
  }

  public async getJSON(endPoint: string): Promise<Observable<object>> {
    console.log(this.httpClient.get(this.baseURL + endPoint));
    return await this.httpClient.get(this.baseURL + endPoint)
  }

  public getGeoJSON(endPoint: string): Observable<string> {
    return this.httpClient.get(this.baseURL + endPoint, {responseType: 'text'});
  }
}
