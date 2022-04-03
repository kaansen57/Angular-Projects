import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Basket } from '../models/basket';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  urlPath: string =
    'https://www.jsonbulut.com/json/orderForm.php?ref=c7c2de28d81d3da4a386fc8444d574f2&customerId=12&productId=12&html=12';
  constructor(private http: HttpClient) {}

  addToBasket() {
   return this.http.get<Basket>(this.urlPath);
  }
}
