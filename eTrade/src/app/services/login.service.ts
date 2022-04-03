import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlPath:string = "https://www.jsonbulut.com//json/userLogin.php"
  constructor(private http:HttpClient) { }

  userLogin(params:any){
   return this.http.get<UserLogin>(this.urlPath, { params: params })
  }
}
