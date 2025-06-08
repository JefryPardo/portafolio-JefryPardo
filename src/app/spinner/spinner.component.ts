import { Component, Input } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  isLoading = false;
  private subscription!: Subscription;

  constructor(private spinnerService: SpinnerService) {}
  ngOnInit() {
    this.subscription = this.spinnerService.loading$.subscribe(value => {
      this.isLoading = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
