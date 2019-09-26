import { Injectable } from '@angular/core';
import { Product } from './product-list.component';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductService {
  private products: Product[] = [
    {name: 'LG', price: 500},
    {name: 'Samsung', price: 600},
    {name: 'Apple', price: 8500},
    {name: 'Motorola', price: 100},
    {name: 'HTC', price: 5300},
    {name: 'Sony', price: 200},
    {name: 'Xiomi', price: 900}
  ];

  constructor() {}

  public getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
