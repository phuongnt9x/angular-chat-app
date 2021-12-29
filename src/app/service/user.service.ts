import { Injectable } from '@angular/core';
import {User} from "../user";
import {Group} from "../group";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[]=[{
    id: 1,
    name: "admin",
    avatar: "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/filip.jpg",
    is_active: true,
  },{
    id: 2,
    name: "Robo Cop",
    avatar: "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg",
    is_active: true,
  },{
    id: 2,
    name: "Optimus",
    avatar: "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/optimus-prime.jpeg",
    is_active: true,
  },{
    id: 3,
    name: "Skynet",
    avatar: "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/real-terminator.png",
    is_active: true,
  },{
    id: 4,
    name: "Termy",
    avatar: "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/termy.jpg",
    is_active: false,
  },{
    id: 5,
    name: "Richard",
    avatar: "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/rick.jpg",
    is_active: false,
  },{
    id: 6,
    name: "Rachel",
    avatar: "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/rachel.jpeg",
    is_active: false,
  },{
    id: 7,
    name: "Robo Cop",
    avatar: "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg",
    is_active: true,
  },
  ];
  groups: Group[]=[{
    id: 1,
    name: 'abc',
    user_id: [1,2,3,5,6,7],
    is_active: true
  },{
    id: 2,
    name: 'group 2',
    user_id: [1,6,7],
    is_active: true
  },{
    id: 3,
    name: 'group 3',
    user_id: [1,3,4,7],
    is_active: true
  }]
  cr_user!: User;


  constructor() { }
  idUser(){
  return this.users.length;
  }
  getAll(){
    return this.users;
  }
  addUserToGroup(user: User,id_group: number){
    this.users.push(user)
    console.log(this.users)
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].id === id_group) {
        this.groups[i].user_id.push(user.id);
      }
    }
    console.log(this.groups)
  }
  getAllGroup(){
    return this.groups;
  }
  findUserGroup(id_gr: number){
    let user_gr: User[]=[]
    let user_id_gr=this.groups.find(group=>group.id==id_gr)?.user_id
    for (let i of user_id_gr) {
      user_gr.push(this.users[i])
    }
    return user_gr
  }
  current_user(){
    return this.cr_user
  }
  set_cr_user(user:User){
    this.cr_user=user;
  }
  fake_user(){
    return this.users[0]
  }

  deleteUserGroup(id_user: number,id_group: number){

    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].id === id_group) {
        for(let j=0;j< this.groups[i].user_id.length;j++){
          if(id_user==this.groups[i].user_id[j]){
            this.groups[i].user_id.splice(j,1)
          }

        }
      }
    }

  }

}
