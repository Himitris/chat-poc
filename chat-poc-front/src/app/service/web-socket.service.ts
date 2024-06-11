import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { Subject } from 'rxjs';
import SockJS from 'sockjs-client';
import { Chance } from 'chance';

const chance = new Chance();

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private stompClient;
  private messageSubject = new Subject<any>();
  private userId: string;
  private userName: string;

  constructor() {
    this.userId = chance.guid();
    this.userName = chance.name();
    const serverUrl = 'http://localhost:8084/chat-websocket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/messages', (message) => {
        this.messageSubject.next(JSON.parse(message.body));
      });
    });
  }

  sendMessage(message: any) {
    const messageWithUserId = {
      ...message,
      userId: this.userId,
      userName: this.userName,
    };
    this.stompClient.send(
      '/app/sendMessage',
      {},
      JSON.stringify(messageWithUserId)
    );
  }

  getMessages() {
    return this.messageSubject.asObservable();
  }

  getUserId() {
    return this.userId;
  }

  getUserName() {
    return this.userName;
  }
}
