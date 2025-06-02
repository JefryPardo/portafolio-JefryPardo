import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  cuadros: number[] = [];

  tipos = ['space', 'white', 'black'];

  maxCuadros = 55;

  constructor() {
    this.generarCuadros();
  }

  generarCuadros() {
    this.cuadros = Array.from({ length: this.maxCuadros }, () => {
      const index = Math.floor(Math.random() * this.tipos.length);
      return index;
    });
  }
}
