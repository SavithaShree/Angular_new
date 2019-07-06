import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CartService{
    product: object;
    array: any=[];

    clickAddToCart(val1, val2) {
        var sample={
          Product: val1,
          Price: val2
        };
        console.log("hi");
        this.product = sample;
        console.log(this.product);
        return this.product;
      }

    
       

}