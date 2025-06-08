import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  chatPortafolio(promptRequest: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/portafolio/chat`, promptRequest);
  }

  enviarContacto(contactRequest: any): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/portafolio/contact`, contactRequest);
  }
}
