import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../service/user.service";
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Message} from "../message";
import {ChatService} from "../service/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  cr_user: User;
  fk_user!: User;
  id_gr!: number;
  chat_gr: Message[] = []
  id_ms!: number;
  notification=''
  msg: Message = {
    id: undefined,
    time: undefined,
    content: undefined,
    sender_id: undefined,
    group_id: undefined,
    last_message: undefined

  }
  title = 'angular-chat-app';
  users: User[] = [];

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private chatService: ChatService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id_gr = Number(paramMap.get('id'));
    });
    this.cr_user = this.userService.current_user()
    this.notification= this.cr_user.name +' has joined group'
    this.fk_user = this.userService.fake_user()
    this.users = this.userService.findUserGroup(this.id_gr)
    console.log(this.users)

  }

  ngOnInit() {
    this.get_ms_gr(this.id_gr)
    this.id_ms = this.chatService.getLength() + 15666;
    setTimeout(() => {
      this.sent_ms_fake('Hello')
      setTimeout(() => {
        this.sent_ms_fake('I am Bot !!!')
      }, 30000)
    }, 3000)

  }

  get_ms_gr(id_gr: number) {
    this.chat_gr = this.chatService.findMessageByIdGroup(id_gr);
    console.log(this.chat_gr)
  }


  sent_ms(content: string) {
    this.msg.id = this.id_ms++;
    this.msg.sender_id = this.cr_user.id;
    this.msg.group_id = this.id_gr;
    this.msg.time = new Date().toDateString();
    this.msg.content = content;
    this.msg.last_message = content;
    this.chat_gr.push(this.msg);
    console.log(this.chat_gr)
    this.msg = {}
    this.chatService.sentmess(this.msg);
  }

  //fake sent msg
  sent_ms_fake(content: string) {
    this.msg.id = this.id_ms++;
    this.msg.sender_id = this.fk_user.id;
    this.msg.group_id = this.id_gr;
    this.msg.time = new Date().toDateString();
    this.msg.content = content;
    this.msg.last_message = content;
    this.chat_gr.push(this.msg);
    console.log(this.chat_gr)
    this.msg = {}
    this.chatService.sentmess(this.msg);
  }

  getUserById(id_us?: number) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id_us) {
        return this.users[i]
      }
    }
    return this.users[0]
  }
  leaveGroup(id_user: number,id_gr:number){
    this.notification=''
     for(let i=0;i<this.users.length;i++){
       if(this.users[i].id==id_user){
         this.notification+=this.users[i].name
         break
       }
     }
    this.userService.deleteUserGroup(id_user,id_gr)
    // this.router.navigate(['']);
    this.notification+= ' has left group'
  }


}
