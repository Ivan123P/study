import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product-list/product-list.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {

  public newProduct: Product = {
    name: '',
    price: 0
  };

  constructor( private productService: ProductService ) { }

  ngOnInit() {
  }

  public addProduct(nameP: HTMLInputElement, price: HTMLInputElement): void {
    this.newProduct.name = nameP.value;
    this.newProduct.price = Number(price.value);

    this.productService.setProducts(Object.assign({}, this.newProduct));
  }

}
