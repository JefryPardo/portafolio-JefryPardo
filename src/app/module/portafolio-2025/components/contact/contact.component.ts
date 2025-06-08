import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private chatService: ChatService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  isSubmitted = false;

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.contactForm.valid) {
      // Consumir el endpoint del backend
      this.chatService.enviarContacto(this.contactForm.value).subscribe({
        next: () => {
          console.log('Mensaje enviado correctamente');
          this.contactForm.reset();
          setTimeout(() => {
            this.isSubmitted = false;  // Ocultar mensaje después de 2 segundos
          }, 2000);
        },
        error: (error) => {
          console.error('Error al enviar el mensaje:', error);
          setTimeout(() => {
            this.isSubmitted = false;  // Ocultar mensaje después de 2 segundos
          }, 2000);
        }
      });

    } else {
      console.log('Formulario no válido');
      this.contactForm.reset();
      setTimeout(() => {
        this.isSubmitted = false;  // Ocultar mensaje después de 2 segundos
      }, 2000);
    }
  }
}
