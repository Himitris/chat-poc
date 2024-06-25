import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { Observable, Subject } from 'rxjs';
import SockJS from 'sockjs-client';
import { Chance } from 'chance';
import { Message } from '../message';

const chance = new Chance();

interface ShortMessage {
  from: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private stompClient;
  private messageSubject = new Subject<Message>();
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

  sendMessage(message: ShortMessage): void {
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

  getMessages(): Observable<Message> {
    return this.messageSubject.asObservable();
  }

  getUserId(): string {
    return this.userId;
  }

  getUserName(): string {
    return this.userName;
  }
}
