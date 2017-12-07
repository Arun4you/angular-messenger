import { Component, OnInit, Input  } from '@angular/core';
import { MessengerService } from '../messenger.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  private name:string = "Sibling1";
  private message;
  @Input() chatArry:any;

  constructor(private messengerservice: MessengerService) { }
  

  ngOnInit() {
    this.messengerservice.getchats.subscribe(data =>
      this.chatArry = data
    )
  }

  pushMessages(){
    let chatObj = {
      name:this.name,
      message:this.message      
    }
    this.messengerservice.pushMessages(chatObj);
    this.refreshChat();    
  }

  refreshChat(){
    //this.getChatMessages();
    this.message='';
  }

  getChatMessages(){
    this.messengerservice.getchats.subscribe(data =>{
      this.chatArry = data;
    })
    // this.messengerservice.getMessages().subscribe(
    //   data => {
    //     this.chatArry = data;
    //   })
  }

  // getChatMessages(){
  //   this.chatArry = this.messengerservice.getMessages();
  // }
}


