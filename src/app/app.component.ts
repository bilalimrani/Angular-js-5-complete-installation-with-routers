import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Router</h1>
    <nav>
      <a routerLink="/test1" routerLinkActive="active">Test component one</a>
      <a routerLink="/test2" routerLinkActive="active">Test component two</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
