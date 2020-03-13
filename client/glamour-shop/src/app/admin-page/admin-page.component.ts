import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  brands:[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.init();
  }

  init() {

    this.userService.getAllBrands()
    .subscribe(x=> {
      this.brands = x;
    });
  }

}
