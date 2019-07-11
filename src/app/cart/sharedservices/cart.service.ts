import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartServiceSubject = new Subject<any>();
  cast = this.cartServiceSubject.asObservable();
  private servicecartArray: any = [];

  //Performs add and remove cart functions
  cart(val, bool) {
    if (bool) {
      this.servicecartArray.push(val);
      alert("Product added to cart");
    }
    else {
      this.servicecartArray = this.servicecartArray.filter(t => t.Product !== val.Product);
      alert("Product removed from cart");
    }
    
    this.cartServiceSubject.next(this.servicecartArray);
  }

  
}
  
