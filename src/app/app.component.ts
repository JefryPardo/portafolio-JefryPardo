import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SpinnerService } from './spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'JefryPardo';
  isChatRoute = false;
  isLoading = true;

  constructor(private router: Router, private spinnerService: SpinnerService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isChatRoute = event.urlAfterRedirects === '/portfolio/chat';
      }
    });
  }

  ngOnInit() {
    this.spinnerService.loading$.subscribe(value => {
      this.isLoading = value;
    });
  }
}
