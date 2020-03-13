import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',

  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

    emailId:string;
    password:string;
    login:FormGroup;


  constructor(public userService:UserService,private route:Router) { }

  ngOnInit() {
    this.login = new FormGroup({
      usr:new FormControl(''),
      psw:new FormControl('')
    });
  }

  onSubmit() {
    this.userService.
    loginUser(this.login.get('usr').value,this.login.get('psw').value)
    .subscribe(x =>{ if(x && x.length){
    localStorage.setItem('user',JSON.stringify(x));
    this.route.navigate(['item-list']);
    }});
  }

}
