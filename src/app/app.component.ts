import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userActivity;
  userInactive: Subject<any> = new Subject();

  constructor(private router: Router, private dataserver: ApiService) {
    this.setTimeout();
    this.userInactive.subscribe(() => {
      if (this.dataserver.hasChange) {
        window.location.reload(); console.log("user interative")
      }
    });
  }

  title = 'Door2Door';

  @HostListener('window:mousemove') refreshUserState() {
    this.dataserver.hasChange.next(true);
    clearTimeout(this.userActivity);
    this.setTimeout();
  }

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 60000);
  }
}
