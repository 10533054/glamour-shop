import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',

  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

    emailId:string; 
    password:string;
    login:FormGroup;
    error;


  constructor(public userService:UserService,private route:Router) { }

  ngOnInit() {
    this.login = new FormGroup({
      usr:new FormControl('',Validators.required),
      psw:new FormControl('',Validators.required)
    });
  }
  adminLogin(){
    this.route.navigate(['admin-login']);
  }
  onSubmit() {
    this.userService.
    loginUser(this.login.get('usr').value,this.login.get('psw').value)
    .subscribe(x =>{ if(x && x.length){
    localStorage.setItem('user',JSON.stringify(x));
    localStorage.setItem('isAdmin','0');
    this.route.navigate(['item-list']);
    }else {
      this.error=true;
    }});
  }
  signUp() {
    this.route.navigate(['create-user'])
  }

}
