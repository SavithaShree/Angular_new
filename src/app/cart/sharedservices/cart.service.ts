import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CartService{
  receiver=new BehaviorSubject<any>('');
  cast=this.receiver.asObservable();
    product: object;
    array: any=[];
    sum: number=0;

    

    // clickAddToCart(val1, val2) {
    //     var sample={
    //       Product: val1,
    //       Price: val2
    //     };
    //     console.log("hi");
    //     this.product = sample;
    //     console.log(this.product);
    //     return this.product;
    //   }
      addToCart(val){
        this.receiver.next(val);
        alert("hello");
        console.log(val);
        this.array.push(val);
        alert("hey");
        console.log(this.array);
        alert("hiiiii");
        console.log(this.array.Price);

      }
      
      total(val){
          var data = val.map(t=>t.Price);
          this.sum=data.reduce((x,y)=> x+y);
          return this.sum;
      }
    
       

}