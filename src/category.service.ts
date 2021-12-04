import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories$: BehaviorSubject<object>;

  constructor(private apiService: ApiService) {
  }

  public getCategoriesJSON(): Observable<string> {
    return this.apiService.getJSON('/Catagories?location=ff');
  }
}
