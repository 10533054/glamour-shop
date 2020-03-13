import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


const routes: Routes = [{
  path:'login',
  component:UserLoginComponent
},{
  path:'create-user',
  component:CreateUserComponent
},{
  path:'item-list',
  component:ItemsListComponent
},{
  path:'admin-page',
  component:AdminPageComponent
},{
  path:'',
  component:UserLoginComponent
},{
  path:'admin-login',
  component:AdminLoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
