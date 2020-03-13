import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  selectedBrand:string
  brands:[];
  products:[];
  ct= new Date().getTime();
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.userService.getAllBrands()
    .subscribe(x=> {
      this.brands = x;
    });
  }
  onProductClick(prod_name,prod_id){
    this.selectedBrand=prod_name;
    this.userService.getItemByBrandId(prod_id)
    .subscribe(x=> {
      this.products = x;
    });
   

  }
  Logout() {
    this.router.navigate(['login'])
  }
  getCurrentTime() {
    return new Date().getTime();
  }

}
