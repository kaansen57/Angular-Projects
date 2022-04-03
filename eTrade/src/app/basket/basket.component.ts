import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Bilgiler } from '../models/products';
import { BasketService } from '../services/basket.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  basket: Bilgiler[] = [];
  quantity: number = 0;
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
  onChange(event: any, index: number) {
    console.log(index);

    this.quantity = event.target.value;
    this.basket[index].totalPrice =
      this.quantity * Number.parseInt(this.basket[index].price!);
  }
  ngOnInit(): void {
    if (sessionStorage.getItem('user')) {
      this.basket = this.localStorageService.getItem('basket');
    } else {
      this.router.navigate(['/login']);
    }
  }
}
