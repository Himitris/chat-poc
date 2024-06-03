import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { Subject } from 'rxjs';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private stompClient;
  private messageSubject = new Subject<any>();

  constructor() {
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
    this.stompClient.send('/app/sendMessage', {}, JSON.stringify(message));
  }

  getMessages() {
    return this.messageSubject.asObservable();
  }
}
