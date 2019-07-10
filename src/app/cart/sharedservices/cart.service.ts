import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
//import { List } from 'src/app/product/sharedservices/product.service'

@Injectable({
  providedIn: 'root'
})

export class CartService {
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