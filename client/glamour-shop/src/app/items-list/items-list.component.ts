import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  brands:[];
  products:[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllBrands()
    .subscribe(x=> {
      this.brands = x;
    });
  }
  onProductClick(prod_id){
    this.userService.getItemByBrandId(prod_id)
    .subscribe(x=> {
      this.products = x;
    });

  }

}
