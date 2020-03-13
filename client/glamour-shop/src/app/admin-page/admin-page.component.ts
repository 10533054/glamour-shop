import { Component, OnInit,ViewChild, } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { MatSelectionList } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  brands:[];
  addItem;
  image;
  products:[];
  show=true;
  @ViewChild('shoes',{static:false})product :MatSelectionList;
  @ViewChild('shoes2',{static:false})product2 :MatSelectionList;
  constructor(private userService:UserService,private router:Router) { 
    this.addItem = new FormGroup({
      brand_id:new FormControl(''),
      product_name:new FormControl(''),
      price:new FormControl(''),
      desc:new FormControl(''),
      qty:new FormControl('')
    })
  }

  ngOnInit() {

    this.init();
    
  }
  Logout() {
    this.router.navigate(['login'])
  }
  showADD(){
this.show=true;
  }
  showRemove(){
    this.show=false;
  }

  init() {

    this.userService.getAllBrands()
    .subscribe(x=> {
      this.brands = x;
    });
  }
  submit() {
    this.userService.addItem(this.addItem.value,this.image).subscribe(x =>x);
  }

  submitRemove() {
    this.userService.remveProdById(this.product2._value).subscribe(x =>x); 
  }
  teast(){
    this.userService.getItemByBrandId(this.product._value)
    .subscribe(x=> {
      this.products = x;
    });
  }
   csvInputChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
      this.image  =reader.result;
      }
    }
  }

}
