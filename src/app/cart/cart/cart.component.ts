import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { ProductService } from '../../product/shared/product.service';
import { Product } from 'src/app/product';

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
      if (this.cartArray.length === 0) {
        this.cartTotal = 0;
      }
      this.cartTotal = 0;
      for (let cart of this.cartArray) {
        this.cartTotal = this.cartTotal + Number(cart.Price)
      }
    })
    return this.cartArray;
  }

  ngOnInit() {
    this.cartSum();
  }

  //Sends the selected item details to Cart Service so that it is removed from cart
  clickRemoveFromCart(val) {
    this.cartService.removeFromCart(val);
  }

}
