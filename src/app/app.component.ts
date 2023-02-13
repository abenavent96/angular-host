import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    if (typeof window === undefined) { return; }
    const listener = (event: any) => { this.auth.storeToken(); console.log(event); };
    window.addEventListener('mfe-login:event', listener);

    const listener2 = (event: any) => { console.log(event.detail); };
    window.addEventListener('multimap:event', listener2);
  }


}
