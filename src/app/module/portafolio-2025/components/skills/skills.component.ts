import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/spinner/spinner.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  constructor(private spinnerService: SpinnerService) {}

  onImageStart() {
    this.spinnerService.registerImageLoading();
  }

  onImageLoaded() {
    this.spinnerService.unregisterImageLoading();
  }
}
