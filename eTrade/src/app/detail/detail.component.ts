import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bilgiler } from '../models/products';
import { BasketService } from '../services/basket.service';
import { LocalStorageService } from '../services/local-storage.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  product: Bilgiler[] = [];
  images: any[] = [];
  userId : string = ''
  
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '960px',
      numVisible: 4,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  constructor(
    private localStorageService: LocalStorageService,
    private basketService: BasketService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    const localProduct = this.localStorageService.getItem('product');
    if (localProduct) {
      this.product = localProduct;
      this.images = this.product[0].images!;
    } else {
      this.router.navigate(['/']);
    }
  }

  addToBasket() {
    this.userId = JSON.parse(sessionStorage.getItem('user')!).bilgiler.userId;
    this.localStorageService.setItemArray('basket',this.product)
    const params = {
      ref:'c7c2de28d81d3da4a386fc8444d574f2',
      customerId:this.userId,
      productId:this.product[0].productId,
      html:this.product[0].productId
    }

     this.basketService.addToBasket(params).subscribe((data) => {
      if (data.order[0].durum) {
         this.router.navigate(['/basket']);
        } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Hata !',
          detail: data.order[0].mesaj,
        });
      }
    });
  }
}
