import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

 public  loginUser(user,password)  {
  let fd=new FormData();
  fd.append('user',user);
  fd.append('password',password);
 return  this.http.post<[]>('/api/login',fd,{responseType:'json'});
  }
  public addUser(frm){
    let fd=new FormData();
    fd.append('user',frm.u_name);
    fd.append('email',frm.email);
    fd.append('psw',frm.psw);
    fd.append('f_name',frm.f_name);
    fd.append('l_name',frm.l_name);
    fd.append('age',frm.age);
    fd.append('phone',frm.phone);
    fd.append('add',frm.add);
    

   return  this.http.post<[]>('/api/addUser',fd,{responseType:'json'});

  }

  public  getItemByBrandId(prod_id)  {
    let fd=new FormData();
   fd.append('prod_id',prod_id);
  return  this.http.post<[]>('/api/viewByBrandId',fd,{responseType:'json'});
   }
   public  remveProdById(prod_id)  {
    let fd=new FormData();
   fd.append('prod_id',prod_id);
  return  this.http.post<[]>('/api/remove/product',fd,{responseType:'json'});
   }
   public  getAllBrands()  {
  return  this.http.get<[]>('/api/viewBrands',{responseType:'json'});
   }
   public  getImageByName(name)  {
   let  fd  = new FormData();
   fd.append('img_name','test.png')

    return  this.http.post<[]>('/api/uploads/',fd,{responseType:'json'});
     }

   public  addItem(fds,img)  {
    let fd=new FormData();
    fd.append('brand_id',fds.brand_id);
    fd.append('desc',fds.desc);
    fd.append('img_name',new Date().getTime().toString())
    fd.append('qty',fds.qty);
    fd.append('price',fds.price);
    fd.append('product_name',fds.product_name);
    fd.append('img',img);
    return  this.http.post<[]>('/api/addItem',fd,{responseType:'json'});
     }
     



}
