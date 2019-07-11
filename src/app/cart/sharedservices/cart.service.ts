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
      console.log("cartarrayinservice when added", this.servicecartArray)
    }
    else {
      this.servicecartArray = this.servicecartArray.filter(t => t.Product !== val.Product);
    }
    this.cartServiceSubject.next(this.servicecartArray);
    console.log("service", val);
  }
}