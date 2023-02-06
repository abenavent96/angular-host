import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    if (typeof window === undefined) { return; }
    const listener = (event: any) => { console.log(event?.detail); };
    window.addEventListener('multimap:event', listener);
  }


}
