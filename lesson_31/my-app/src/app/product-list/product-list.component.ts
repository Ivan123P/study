import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
}

const PRODUCTS: Product[] = [
  {name: 'LG', price: 500},
  {name: 'Samsung', price: 700},
  {name: 'Apple', price: 1900},
  {name: 'Nokia', price: 1000},
  {name: 'Motorola', price: 500},
  {name: 'HTC', price: 200}
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {
  public productList: Product[] = PRODUCTS;
  public selectedProduct: Product = null;

  constructor() { }

  public selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
}
