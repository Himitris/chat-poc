import { Component, OnDestroy } from '@angular/core';
import { WebSocketService } from '../service/web-socket.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnDestroy {
  messages: any[] = [];
  messageContent: string = '';
  private subscriptions: Subscription = new Subscription();

  constructor(private webSocketService: WebSocketService) {
    this.subscriptions = this.webSocketService
      .getMessages()
      .subscribe((message) => {
        this.messages.push(message);
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  sendMessage() {
    console.log('Contenu du message:', this.messageContent);
    if (this.messageContent.trim()) {
      console.log('passé');
      this.webSocketService.sendMessage({
        from: 'User',
        content: this.messageContent,
      });
      this.messageContent = '';
    } else {
      console.log('Message vide ou invalide');
    }
  }
}
