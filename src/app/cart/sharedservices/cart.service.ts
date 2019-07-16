import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private servicecartArray = [];
  cartServiceSubject = new BehaviorSubject<any>(this.servicecartArray);
  cartSubject = this.cartServiceSubject.asObservable();

  //Performs add and remove cart functions
  addToCart(val) {
    // val.isFound= !val.isFound;
    // console.log("serviceaddtocart",val)
      this.servicecartArray.push(val);
      this.cart(this.servicecartArray);
      // return val;     
  }
  removeFromCart(val){    
      this.servicecartArray = this.servicecartArray.filter(t => t.Product !== val.Product);
      this.cart(this.servicecartArray);
  }
  cart(val){
    this.cartServiceSubject.next(this.servicecartArray);
  }
  
}