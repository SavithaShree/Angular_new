import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartList: Product[] = [];
  cartServiceSubject = new BehaviorSubject<any>(this.cartList);
  cartSubject$ = this.cartServiceSubject.asObservable();

  addToCart(val) {
    this.cartList.push(val);
    this.cart(this.cartList);
  }
  
  removeFromCart(val) {
    this.cartList = this.cartList.filter(t => t.id !== val.id);
    this.cart(this.cartList);
  }

  cart(val) {
    this.cartServiceSubject.next(this.cartList);
  }

}