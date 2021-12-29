import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_form!: FormGroup
  id_group!:number;
  constructor(private fb:FormBuilder,
              private userService:UserService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) =>{
      this.id_group=Number(paramMap.get('id'))
    })
    this.user_form=this.fb.group({
      name: ['',Validators.required],
      avatar: ['']
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    const user=this.user_form.value;
    user.id=this.userService.idUser()
    user.is_active=true
    console.log(user)
    this.userService.addUserToGroup(user,this.id_group);
    this.userService.set_cr_user(user);
    this.router.navigate(['/chat',this.id_group])

  }
}
