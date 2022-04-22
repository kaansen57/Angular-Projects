import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class HighlightsService {

  urlPath:string = `https://www.jsonbulut.com/json/product.php?ref=${environment.ref+'&start=0'}`;

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<Products>(this.urlPath)
  }
}
