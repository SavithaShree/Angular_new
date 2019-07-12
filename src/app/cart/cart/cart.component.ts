import { Component, OnInit } from '@angular/core';
import { CartService } from '../sharedservices/cart.service';
import { Subscription } from 'rxjs';
import { List } from 'src/app/product/sharedservices/product.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartArray: any = [];
  private cartTotal: number = 0;
  private subscription: Subscription;

  constructor(private cartService: CartService, private list: List) {
  }

  checkFunction() {
    this.cartService.cartSubject.subscribe(array => {
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
    this.subscription = this.checkFunction();
  }

  //Sends the selected item details to Cart Service so that it is removed from cart
  clickRemoveFromCart(val) {
    this.cartService.removeFromCart(val);
  }

}
