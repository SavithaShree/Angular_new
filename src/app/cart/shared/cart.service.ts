import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private servicecartArray: Product[] = [];
  randomCount: number = 0;
  cartServiceSubject = new BehaviorSubject<any>(this.servicecartArray);
  cartSubject$ = this.cartServiceSubject.asObservable();

  //Performs add and remove cart functions
  addToCart(val) {
    val.randomCount = ++this.randomCount;
    console.log(val.randomCount);
    this.servicecartArray.push(val);
    console.log(this.servicecartArray);
    this.cart(this.servicecartArray);
  }
  
  removeFromCart(val) {
    console.log("removeservice",val.randomCount)
    console.log("servicecartarray",this.servicecartArray)
    this.servicecartArray = this.servicecartArray.filter(t => t.randomCount !== val.randomCount);
    this.cart(this.servicecartArray);
  }

  cart(val) {
    this.cartServiceSubject.next(this.servicecartArray);
  }

}