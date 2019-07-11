import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
<<<<<<< HEAD
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
=======
  receiver = new Subject<any>();
  cast = this.receiver.asObservable();
  //serviceArray: object;
  //servicecartArray: any = [];
  //sum: number = 0;
  // private subscription: Subscription;

  // this.subscription = this.cartService.cast.subscribe(array => {
  //   console.log(this.cartArray.length);
  //   this.cartArray.push(array);
  //   console.log(this.cartArray);
  //   console.log(this.sum);

//  alert("initialised");
  //   this.sum = this.sum + Number(array.Price);
  //   console.log(this.sum, array.Price)

  // })



  addToCart(val) {
    
    //push to service object-that objects that come in an array and display it in cartcomp.ts by subscribing the array.
    // this.serviceArray={
    //   Product: val.Product,
    //   Price: val.Price,
    //   Total: this.sum
    // }
    //this.servicecartArray.push(val);
    //this.sum = this.sum + Number(val.Price);
    

    this.receiver.next(val);
    alert("service");
    console.log("service",val);

    // this.array.push(val);
    // alert("hey");
    // console.log(this.array);
    // alert("hiiiii");
    // console.log(this.array.Price);

  }

  // total(id,price,boolean){
  //   if(boolean){

  //     var data = val.map(t=>t.Price);
  //     this.sum=data.reduce((x,y)=> x+y);
  //     return this.sum;
  //   }
  // }



}
>>>>>>> 60627f0845f00ecdf35b4e3ff418cfc4c91a0097
