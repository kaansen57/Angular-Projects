import { Component, OnInit } from '@angular/core';
import { Bilgiler, Products } from '../models/products';
import { HighlightsService } from '../services/highlights.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
})
export class HighlightsComponent implements OnInit {
  products: Bilgiler[] = [];
  constructor(private highlightService: HighlightsService,private localStorageService:LocalStorageService) {}

  ngOnInit(): void {
    this.highlightService.getProduct().subscribe((data) => {
      this.products = data.Products![0].bilgiler;
    });
  }
  productDetail(index:number){
    this.localStorageService.setItem('product',[this.products[index]]);
  }
}
