import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../service/chat.service';

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

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    setTimeout(() => this.scrollToBottom(), 0);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
    } catch (err) {}
  }

  sendMessage() {
    const messageControl = this.chatForm.get('message');
    if (!messageControl) return;

    const messageText = messageControl.value.trim();
    if (!messageText) return;

    this.messages.push({ sender: 'user', text: messageText });
    messageControl.reset();

    this.chatService.chatPortafolio({ prompt: messageText }).subscribe({
      next: (response: any) => {
        // Usamos response.mensaje que viene del backend
        this.messages.push({
          sender: 'bot',
          text: response.mensaje,
        });
      },
      error: (err) => {
        if (err.status === 429) {
          this.messages.push({
            sender: 'bot',
            text:
              'Has superado el límite de 5 mensajes. Por favor espera 30 minutos antes de enviar más mensajes.',
          });
        } else {
          this.messages.push({
            sender: 'bot',
            text: 'Ocurrió un error, intenta de nuevo más tarde.',
          });
        }
      },
    });
  }
}
