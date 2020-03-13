import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
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
    this.route.navigate(['login'])
  }
onSubmit() {
  this.userService.
  loginUser(this.login.get('usr').value,this.login.get('psw').value)
  .subscribe(x =>{ if(x && x.length){
  localStorage.setItem('user',JSON.stringify(x));
  localStorage.setItem('isAdmin','1');
  this.route.navigate(['admin-page']);
  }else {
    this.error=true;
  }});
}
signUp() {
  this.route.navigate(['create-user'])
}


}
