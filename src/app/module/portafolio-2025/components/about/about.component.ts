import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/spinner/spinner.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  cuadros: number[] = [];

  tipos = ['space', 'white', 'black'];

  maxCuadros = 60;

  constructor(private spinnerService: SpinnerService) {
    this.generarCuadros();
  }

  generarCuadros() {
    this.cuadros = Array.from({ length: this.maxCuadros }, () => {
      const index = Math.floor(Math.random() * this.tipos.length);
      return index;
    });
  }

  onImageStart() {
    this.spinnerService.registerImageLoading();
  }

  onImageLoaded() {
    this.spinnerService.unregisterImageLoading();
  }
}
