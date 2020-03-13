import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
 createUser;
  constructor(private userService:UserService,private route:Router) {
    this.createUser= new FormGroup({
      u_name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      psw: new FormControl('',Validators.required),
      f_name:new FormControl('',Validators.required),
      l_name:new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),
      add:new FormControl('',Validators.required),
    })
   }

  ngOnInit() {
  }

  submit() {
    this.userService.addUser(this.createUser.value).subscribe(x=>this.route.navigate(['login']));
  }

}
