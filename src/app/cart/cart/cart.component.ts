import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/product';
import { CartService } from '../shared/cart.service';
import { ProductService } from '../../product/shared/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartArray: Product[] = [];
  private cartTotal: number;

  constructor(private cartService: CartService,
    private productService: ProductService) { }

  ngOnInit() {
    this.cartSum();
  }

  cartSum() {
    this.cartService.cartSubject$.subscribe(array => {
      this.cartArray = array;
      this.cartTotal = 0;
      this.cartTotal = this.cartArray.reduce((previous, current) => {
        return previous + current.Price;}, 0);
    })
  }

  removeFromCart(val) {
    this.cartService.removeFromCart(val);
  }

}
