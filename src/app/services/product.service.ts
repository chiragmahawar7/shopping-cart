import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Vegetable 1', 'Healthy Food', 100),
    new Product(2, 'Vegetable 2', 'Healthy Food', 150),
    new Product(3, 'Vegetable 3', 'Healthy Food', 50),
    new Product(4, 'Vegetable 4', 'Healthy Food', 200),
    new Product(5, 'Vegetable 5', 'Healthy Food', 100),
    new Product(6, 'Vegetable 6', 'Healthy Food', 150),
    new Product(7, 'Vegetable 7', 'Healthy Food', 250),
  ];

  constructor() { }

  getProducts(): Product[] {
    //TODO: Populate products from API & return an observable
    return this.products;
  }
}