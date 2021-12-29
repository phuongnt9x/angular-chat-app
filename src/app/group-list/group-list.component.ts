import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Group[]=[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllGroup();
  }
  getAllGroup(){
   this.groups=this.userService.getAllGroup();
  }

}
