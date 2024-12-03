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
}
