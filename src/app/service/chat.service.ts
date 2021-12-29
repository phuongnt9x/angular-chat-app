import { Injectable } from '@angular/core';
import { Message } from '../message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chat: Message[]=[{
    id:1561165,
    content:"Hello string",
    sender_id: 1,
    group_id: 3,
    last_message: "Hello"

  },{
    id:1561235,
    content:"Hello abca",
    sender_id: 2,
    group_id: 3,
    last_message: "Hello"

  },{
    id:1561238,
    content:"Hello abca",
    sender_id: 2,
    group_id: 3,
    last_message: "Hello"

  },{
    id:1561235,
    content:"Hello ",
    sender_id: 2,
    group_id: 3,
    last_message: "1"

  },{
    id:1561215,
    content:"Hello 111",
    sender_id: 3,
    group_id: 3,
    last_message: "2"

  },{
    id:1561235,
    content:"Hello wqe",
    sender_id: 1,
    group_id: 3,
    last_message: "Hello"
  },{
    id:1562235,
    content:"Hello ggg",
    sender_id: 3,
    group_id: 3,
    last_message: "Hello"

  },{
    id:1561211,
    content:"Hello qw",
    sender_id: 3,
    group_id: 3,
    last_message: "2"

  },{
    id:1561212,
    content:"Hello qw",
    sender_id: 3,
    group_id: 2,
    last_message: "2"

  },{
    id:1561213,
    content:"Hello zx",
    sender_id: 3,
    group_id: 2,
    last_message: "2"

  }]
  constructor() { }
  sentmess(message:Message){
    this.chat.push(message)
  }
  findMessageByIdGroup(id_gr:number){
    let ms_gr: Message[]=[]
    for(let i=0;i<this.chat.length;i++){
      if(this.chat[i].group_id===id_gr){
        ms_gr.push(this.chat[i]);
      }
    }
    return ms_gr;
  }
  getLength(){
    return this.chat.length;
  }


}
