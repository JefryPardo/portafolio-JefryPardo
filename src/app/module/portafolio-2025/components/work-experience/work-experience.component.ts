import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

  cuadros: number[] = [];

  constructor() {
    const totalCuadros = 120; // Ajusta según necesidad
    for (let i = 0; i < totalCuadros; i++) {
      this.cuadros.push(Math.floor(Math.random() * 3)); // 0, 1 o 2
    }
  }
}
