import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => { return event instanceof NavigationEnd; })
    ).subscribe((event: any) =>
      {
        if (typeof window === undefined) { return; }
        const listener = (event: any) => { console.log(event?.detail); };
        console.log('remove');
        window.removeEventListener('multimap:event', listener);
        if (this.router.getCurrentNavigation()?.finalUrl?.toString().startsWith('/mfe-navigation')) {
          console.log('add event');
          window.addEventListener('multimap:event', listener);
        }
      })
  }


}
