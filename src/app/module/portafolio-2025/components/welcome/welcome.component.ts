import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/spinner/spinner.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(private spinnerService: SpinnerService) {}
  
  onImageStart() {
    this.spinnerService.registerImageLoading();
  }

  onImageLoaded() {
    this.spinnerService.unregisterImageLoading();
  }
}
