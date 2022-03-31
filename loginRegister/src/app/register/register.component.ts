import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import UserLogin from '../models/userLogin';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    ref: new FormControl('c7c2de28d81d3da4a386fc8444d574f2'),
    userName: new FormControl('', [Validators.required]),
    userSurname: new FormControl('', [Validators.required]),
    userPhone: new FormControl('', [Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(10)]),
    userMail: new FormControl('', [Validators.required, Validators.email]),
    userPass: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private registerService:RegisterService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  register() {
    if (this.registerService.validateForm(this.userForm)) {
        this.registerService.register(this.userForm).subscribe((data) => {
          console.log(data);
          const status = data.user[0].durum;
          const message = data.user[0].mesaj;
          if (status) {
            this.router.navigate(['login']);
            this.toastr.success(message, 'Kayıt Başarılı!');
          } else {
            this.toastr.error(message, 'Kayıt Hatası!');
          }
        });
    }else{
      this.toastr.warning('Tüm alanları doldurunuz',"Uyarı !")
    }
  }
}
