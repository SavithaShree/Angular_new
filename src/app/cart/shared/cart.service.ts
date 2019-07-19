import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private servicecartArray: Product[] = [];
  cartServiceSubject = new BehaviorSubject<any>(this.servicecartArray);
  cartSubject$ = this.cartServiceSubject.asObservable();

  //Performs add and remove cart functions
  addToCart(val) {
    this.servicecartArray.push(val);
    this.cart(this.servicecartArray);
  }
  removeFromCart(val) {
    this.servicecartArray = this.servicecartArray.filter(t => t.id !== val.id);
    this.cart(this.servicecartArray);
  }
  cart(val) {
    this.cartServiceSubject.next(this.servicecartArray);
  }

}