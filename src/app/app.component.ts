import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio-2025';
  isChatRoute = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Cambia '/portfolio/chat' por la ruta exacta de chat
        this.isChatRoute = event.urlAfterRedirects === '/portfolio/chat';
      }
    });
  }
}
