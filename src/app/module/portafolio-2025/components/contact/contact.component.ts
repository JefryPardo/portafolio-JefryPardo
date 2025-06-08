import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  isSubmitted = false;

  onSubmit(): void {
    this.isSubmitted = true;

    // Ocultar el mensaje después de 3 segundos (opcional)
    setTimeout(() => {
      this.isSubmitted = false;
    }, 3000);
    // if (this.contactForm.valid) {
    //   console.log('Formulario enviado:', this.contactForm.value);
    //   this.contactForm.reset();

    // } else {
    //   console.log('Formulario no válido');
    // }
  }
}
