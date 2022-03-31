import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import UserLogin from '../models/userLogin';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  urlPath: string = 'https://www.jsonbulut.com/json/userRegister.php';
  
  constructor(private http: HttpClient) {}

  validateForm(userForm: FormGroup) {
    return userForm.valid;
  }

  register(userForm: FormGroup) {
    return this.http.get<UserLogin>(this.urlPath, {
      params: userForm.value,
    });
  }
}
