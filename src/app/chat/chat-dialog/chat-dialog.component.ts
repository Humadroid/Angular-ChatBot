import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';


@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit, AfterViewChecked {

  messages: Observable<Message[]>;
  formValue: string;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  constructor(public chat: ChatService) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
    this.scrollToBottom();
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

}
