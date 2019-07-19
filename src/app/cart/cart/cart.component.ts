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
  private cartTotal: number = 0;

  constructor(private cartService: CartService, private productService: ProductService) {
  }

  //Performs total sum of the cart items
  cartSum() {
    this.cartService.cartSubject$.subscribe(array => {
      this.cartArray = array;
      console.log("cart",this.cartArray)
      let cartTotal = 0;
      for (let cart of this.cartArray) {
        this.cartTotal = this.cartTotal + Number(cart.Price)
      }
      // this.cartArray.reduce(cartTotal, cart => {
      //   cartTotal= cartTotal + cart.Price;
      // })
    })
  }

  ngOnInit() {
    this.cartSum();
  }

  //Sends the selected item details to Cart Service so that it is removed from cart
  removeFromCart(val) {
    this.cartService.removeFromCart(val);
  }

}
