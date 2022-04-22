import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{
  isLogin: boolean = false;
  basketLength: string = '0'
  constructor() {}

  ngOnInit(): void {
    if (sessionStorage.getItem('user')) {
      this.isLogin = true;
      this.basketLength = JSON.parse(localStorage.getItem('basket')!).length;
    } else {
      this.isLogin = false;
    }
  }
  basketLen(){
    if(JSON.parse(localStorage.getItem('basket')!)){
     return this.basketLength =JSON.parse(localStorage.getItem('basket')!).length
    }
    return  0;
  }
  exit() {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
  }
}
