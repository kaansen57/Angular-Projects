import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(private basketService:BasketService) { }

  ngOnInit(): void {
    this.basketService.addToBasket().subscribe((data) => console.log(data));
  }

}
