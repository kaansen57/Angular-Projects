import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  categories: Categories[] = [];
  constructor(private categoryService :CategoryService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategory();
  }
}
