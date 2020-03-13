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

  public  getItemByBrandId(prod_id)  {
    let fd=new FormData();
   fd.append('prod_id',prod_id);
  return  this.http.post<[]>('/api/viewByBrandId',fd,{responseType:'json'});
   }

   public  getAllBrands()  {
  return  this.http.get<[]>('/api/viewBrands',{responseType:'json'});
   }

   



}
