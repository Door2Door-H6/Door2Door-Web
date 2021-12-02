import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private apiService: ApiService) {}

  public getCategoriesJSON(): void {
    const a = this.apiService.getJSON('/assets/room_katagories.json').subscribe( (x) => {this.categories$.next(  JSON.stringify(x)); });
  }
}
