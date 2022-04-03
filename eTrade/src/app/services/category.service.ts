import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  sliderCategories: Categories[] = [
    {
      categoryId: 1,
      categoryName: 'Elektronik',
      categoryDetail: 'AL ya da SAT',
      categoryImage:
        'https://zebramo.com/static/imgs/carousel/elektronik-nov.webp',
      categoryIcon: '',
    },
    {
      categoryId: 2,
      categoryName: 'Ev & Dekorasyon',
      categoryDetail: 'ücretsiz Kargo',
      categoryImage:
        'https://zebramo.com/static/imgs/carousel/ev-dekorasyon.webp',
      categoryIcon: '',
    },
    {
      categoryId: 3,
      categoryName: 'Spor & Outdoor',
      categoryDetail: 'Avantajlı Fiyatlar!',
      categoryImage:
        'https://zebramo.com/static/imgs/carousel/spor-outdoor.webp',
      categoryIcon: '',
    },
    {
      categoryId: 4,
      categoryName: 'Oyun & Konsol',
      categoryDetail: 'Oyun tutkunlarının dünyası',
      categoryImage:
        'https://zebramo.com/static/imgs/carousel/oyun-konsol.webp',
      categoryIcon: '',
    },
    {
      categoryId: 5,
      categoryName: 'Kitap & Kırtasiye',
      categoryDetail: 'Roman & Hikaye',
      categoryImage:
        'https://zebramo.com/static/imgs/carousel/kitap-kirtasiye.webp',
      categoryIcon: '',
    },
    {
      categoryId: 6,
      categoryName: 'Sneakers',
      categoryDetail: '100₺ ve altı',
      categoryImage:
        'https://zebramo.com/static/imgs/carousel/sneakers-nov.webp',
      categoryIcon: '',
    },
  ];

  categories: Categories[] = [
    {
      categoryId: 7,
      categoryName: 'Erkek',
      categoryDetail: 'Erkek Ürünleri',
      categoryImage: '',
      categoryIcon: 'fas fa-male',
    },
    {
      categoryId: 8,
      categoryName: 'Kadın',
      categoryDetail: 'Kadın Ürünleri',
      categoryImage: '',
      categoryIcon: 'fas fa-female',
    },
    {
      categoryId: 1,
      categoryName: 'Elektronik',
      categoryDetail: 'AL ya da SAT',
      categoryImage:
        'https://zebramo.com/static/imgs/carousel/elektronik-nov.webp',
      categoryIcon: 'fas fa-laptop',
    },
    {
      categoryId: 2,
      categoryName: 'Ev & Dekorasyon',
      categoryDetail: 'ücretsiz Kargo',
      categoryImage:
        'https://zebramo.com/static/imgs/carousel/ev-dekorasyon.webp',
      categoryIcon: 'fas fa-house-user',
    },
    {
      categoryId: 3,
      categoryName: 'Spor & Outdoor',
      categoryDetail: 'Avantajlı Fiyatlar!',
      categoryImage:
        'https://zebramo.com/static/imgs/carousel/spor-outdoor.webp',
      categoryIcon: 'fas fa-football-ball',
    },
    {
      categoryId: 4,
      categoryName: 'Oyun & Konsol',
      categoryDetail: 'Oyun tutkunlarının dünyası',
      categoryImage:
        'https://zebramo.com/static/imgs/carousel/oyun-konsol.webp',
      categoryIcon: 'fas fa-gamepad',
    },
    {
      categoryId: 5,
      categoryName: 'Kitap & Kırtasiye',
      categoryDetail: 'Roman & Hikaye',
      categoryImage:
        'https://zebramo.com/static/imgs/carousel/kitap-kirtasiye.webp',
      categoryIcon: 'fas fa-book',
    },
    {
      categoryId: 6,
      categoryName: 'Sneakers',
      categoryDetail: '100₺ ve altı',
      categoryImage:
        'https://zebramo.com/static/imgs/carousel/sneakers-nov.webp',
      categoryIcon: 'fas fa-shoe-prints',
    },
    {
      categoryId: 9,
      categoryName: 'Gıda & Market',
      categoryDetail: 'Gıda & Market',
      categoryImage: '',
      categoryIcon: 'fas fa-store',
    },
    {
      categoryId: 10,
      categoryName: 'Diğer',
      categoryDetail: 'Diğer ürünler',
      categoryImage: '',
      categoryIcon: 'fas fa-bars',
    },
  ];

  constructor() {}

  getSliderCategory(): Categories[] {
    return this.sliderCategories;
  }
  getCategory(): Categories[] {
    return this.categories;
  }
}
