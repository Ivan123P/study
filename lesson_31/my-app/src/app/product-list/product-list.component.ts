import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { OnInit } from '@angular/core';

export interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  public productList: Product[] = [];
  public selectedProduct: Product = null;
  public newProduct: Product = {
    name: '',
    price: 0
  };

  constructor( private productService: ProductService ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.productList = data;
      }
    );
  }

  public selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  public addProduct(): void {
    console.log(this.newProduct);
  }
}
