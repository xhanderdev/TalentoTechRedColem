import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-chat',
  standalone: false,
  
  templateUrl: './floating-chat.component.html',
  styleUrl: './floating-chat.component.css'
})
export class FloatingChatComponent {
  isMinimized: boolean = false;
  isVisible: boolean = true;
  messages: string[] = []; // Lista de mensajes
  newMessage: string = ''; // Mensaje nuevo

  toggleMinimize() {
    this.isMinimized = !this.isMinimized;
  }

  closeChat() {
    this.isVisible = false;
  }

  openChat() {
    this.isVisible = true;
    this.isMinimized = false;
  }



  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage);
      this.newMessage = '';
      setTimeout(() => this.scrollToBottom(), 0);
    }
  }
  
  scrollToBottom() {
    const messagesContainer = document.querySelector('.messages');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }
  
}