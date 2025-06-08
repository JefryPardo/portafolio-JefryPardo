import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewChecked, OnInit {

  messages = [
    { sender: 'bot', text: 'Hola, soy un asistente virtual ¿Que quieres saber de Jefry?' }
  ];

  @ViewChild('chatMessages') private chatMessages!: ElementRef;

  chatForm: FormGroup = new FormGroup({
    message: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    setTimeout(() => this.scrollToBottom(), 0);
  }

  sendMessage() {
    const messageControl = this.chatForm.get('message');
    if (!messageControl) return;

    const messageText = messageControl.value.trim();
    if (!messageText) return;

    // Enviar mensaje de usuario
    this.messages.push({ sender: 'user', text: messageText });
    messageControl.reset();

    // Simular respuesta automática
    setTimeout(() => {
      this.messages.push({ sender: 'bot', text: 'Respuesta automática.' });
    }, 500);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
