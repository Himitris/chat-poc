import { Component, OnDestroy } from '@angular/core';
import { WebSocketService } from '../service/web-socket.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Message } from '../message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnDestroy {
  messages: Message[] = [];
  messageContent: string = '';
  userName: string;
  private subscriptions: Subscription = new Subscription();

  constructor(private webSocketService: WebSocketService) {
    this.userName = this.webSocketService.getUserName();
    this.subscriptions = this.webSocketService
      .getMessages()
      .subscribe((message) => {
        this.messages.push(message);
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  sendMessage() : void {
    if (this.messageContent.trim()) {
      this.webSocketService.sendMessage({
        from: this.userName,
        content: this.messageContent,
      });
      this.messageContent = '';
    }
  }
}
