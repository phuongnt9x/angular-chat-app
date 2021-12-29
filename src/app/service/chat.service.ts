import { Injectable } from '@angular/core';
import { Message } from '../message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chat: Message[]=[{
    id:1561165,
    content:"Thời gian đằng đẵng",
    sender_id: 1,
    group_id: 3,
    last_message: "Hello"

  },{
    id:1561235,
    content:"Không gian mênh mông",
    sender_id: 2,
    group_id: 3,
    last_message: "Hello"

  },{
    id:1561238,
    content:"Đất Nước là nơi dân mình đoàn tụ",
    sender_id: 2,
    group_id: 3,
    last_message: "Hello"

  },{
    id:1561235,
    content:"Đất là nơi Chim về",
    sender_id: 2,
    group_id: 3,
    last_message: "1"

  },{
    id:1561215,
    content:"Nước là nơi Rồng ở",
    sender_id: 3,
    group_id: 3,
    last_message: "2"

  },{
    id:1561235,
    content:"Những ai bây giờ",
    sender_id: 1,
    group_id: 3,
    last_message: "Hello"
  },{
    id:1562235,
    content:"Yêu nhau và sinh con đẻ cái",
    sender_id: 3,
    group_id: 3,
    last_message: "Hello"

  },{
    id:1561211,
    content:"Gánh vác phần người đi trước để lại",
    sender_id: 3,
    group_id: 3,
    last_message: "2"

  },{
    id:1561212,
    content:"Dặn dò con cháu chuyện mai sau",
    sender_id: 3,
    group_id: 2,
    last_message: "2"

  },{
    id:1561213,
    content:"Hằng năm ăn đâu làm đâu",
    sender_id: 3,
    group_id: 2,
    last_message: "2"

  },{
    id:1561299,
    content:"Cũng biết cúi đầu nhớ ngày giỗ Tổ",
    sender_id: 3,
    group_id: 2,
    last_message: "2"

  },{
    id:1562213,
    content:"Đất là nơi anh đến trường",
    sender_id: 1,
    group_id: 1,
    last_message: "Hello"

  },{
    id:1562214,
    content:"Nước là nơi em tắm",
    sender_id: 2,
    group_id: 1,
    last_message: "Hello"

  },{
    id:1562215,
    content:"Đất Nước là nơi ta hò hẹn",
    sender_id: 2,
    group_id: 1,
    last_message: "Hello"

  },{
    id:1562216,
    content:"Đất Nước là nơi em đánh rơi chiếc khăn trong nỗi nhớ thầm",
    sender_id: 2,
    group_id: 1,
    last_message: "1"

  },{
    id:1562217,
    content:"Đất là nơi con chim phượng hoàng bay về hòn núi bạc",
    sender_id: 3,
    group_id: 1,
    last_message: "2"

  },{
    id:1562218,
    content:"Khi hai đứa cầm tay",
    sender_id: 1,
    group_id: 1,
    last_message: "Hello"
  },{
    id:1562219,
    content:"Con sẽ mang đất nước đi xa",
    sender_id: 3,
    group_id: 2,
    last_message: "Hello"

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
