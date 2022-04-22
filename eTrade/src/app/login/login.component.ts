import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('user')!);
    if (user) {
      this.router.navigate(['']);
    }
  }

  userLogin() {
    const params = {
      ref: environment.ref,
      userEmail: this.email,
      userPass: this.password,
      face: 'no',
    };

    this.loginService.userLogin(params).subscribe((data) => {
      const user = data.user[0];
      const status = user.durum;
      if (status) {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/']);
        location.reload();
      }
    });
  }
}
