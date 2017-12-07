import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MessengerService } from './messenger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() messages:EventEmitter<any> = new EventEmitter();  
  
  title = 'app';
  chatArry:any;
  constructor(private messengerservice: MessengerService){}

  // getChatMessages(){
  //   this.messengerservice.getMessages().subscribe(
  //     data => {
  //       this.chatArry = data;
  //       this.messages.emit(this.chatArry);
  //     })
  // }

  

}
