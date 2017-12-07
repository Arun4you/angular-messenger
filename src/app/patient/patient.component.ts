import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from '../messenger.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  private name:string = "Sibling2";
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
    this.getChatMessages();
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
