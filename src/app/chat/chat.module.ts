import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChatDialogComponent],
  exports: [ChatDialogComponent],
  providers: [ChatService]
})
export class ChatModule { }
