import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Basket } from '../models/basket';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  urlPath: string =
    'https://www.jsonbulut.com/json/orderForm.php';

  constructor(private http: HttpClient) {}

  addToBasket(params: any) {
    return this.http.get<Basket>(this.urlPath, { params: params });
  }
}
