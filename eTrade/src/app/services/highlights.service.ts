import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class HighlightsService {

  urlPath:string = "https://www.jsonbulut.com/json/product.php?ref=c7c2de28d81d3da4a386fc8444d574f2&start=0";

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<Products>(this.urlPath)
  }
}
