import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  private imagesLoading = 0;

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    this.loadingSubject.next(false);
  }

  registerImageLoading() {
    this.imagesLoading++;
    if (this.imagesLoading === 1) {
      this.show(); // Solo cuando entra la primera imagen a cargar
    }
  }

  unregisterImageLoading() {
    if (this.imagesLoading > 0) {
      this.imagesLoading--;
    }

    if (this.imagesLoading === 0) {
      this.hide(); // Cuando ya no quedan imágenes pendientes
    }
  }
}
