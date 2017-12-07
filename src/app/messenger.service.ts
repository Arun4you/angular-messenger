import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class MessengerService {

public msgsource = new BehaviorSubject<any>('default')

  private chats=[];
  getchats = this.msgsource.asObservable();
  constructor() { }

  // getMessages(){
  //   this.msgsource.next(this.chats)
  // }

// getMessages():Observable<chat[]>{
//   let observable=Observable.create(observer => {    
//      let chats = this.chats;
//       observer.next(chats).map(chats => chats.json); 
//       observer.complete();//to show we are done with our processing
//      observer.error(new Error("error message"));
//   })
//   return observable;
// }

// getMessages(){
//   return this.chats;
// }

pushMessages(message){
  let data:any;
  //console.log(message);
  data=message;
  this.chats.push(data);
  this.msgsource.next(this.chats)
  }
}

interface chat{
  name:string;
  message:string;
}
