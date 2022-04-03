import { Component, OnInit } from '@angular/core';
import { Bilgiler } from '../models/products';
import { BasketService } from '../services/basket.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basket :Bilgiler[] = []
  constructor(private basketService:BasketService,private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.basket = this.localStorageService.getItem('basket')
    // this.basketService.addToBasket().subscribe((data) => console.log(data));
  }

}
