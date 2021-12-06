import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userActivity;
  userInactive: Subject<any> = new Subject();

  constructor() {
    this.setTimeout();
    this.userInactive.subscribe(() => console.log('user has been inactive for 3s'));
  }

  title = 'Door2Door';

  @HostListener('window:mousemove') refreshUserState() {
  clearTimeout(this.userActivity);
    this.setTimeout();
  }

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 60000);
  }
}
