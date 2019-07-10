import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../sharedservices/cart.service';
import { Subscription } from 'rxjs';
import { List } from 'src/app/product/sharedservices/product.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartArray: any = [];
  sum: number = 0;
  private subscription: Subscription;

  constructor(private cartService: CartService,
    private list: List) {
    // this.subscription=this.cartService.cast.subscribe(array=>{
    //   console.log(this.cartArray.length);
    //   this.cartArray.push(array);
    //   console.log(this.cartArray);
    //   console.log(this.sum);


    //     this.sum = this.sum + Number(array.Price);
    //     console.log(this.sum, array.Price)

    // })
    // alert("hajkdhuwied");

  }

  

  ngOnInit() {
    this.subscription = this.cartService.cast.subscribe(array => {
       this.cartArray.push(array);
             console.log(this.cartArray);
//       console.log(this.sum);

      this.sum = this.sum + Number(array.Price);
     console.log(this.sum, array.Price)

     })


    // this.subscription=this.cartService.cast.subscribe(array=>{
    //   console.log(this.cartArray.length);
    //   this.cartArray.push(array);})
    //   // alert("hajkdhuwied");
    //  console.log(this.cartArray);
    //       alert("final");
    //       console.log("hiiiii");
    // console.log(this.cartArray);

    //console.log(this.product);
    // this.cartArray =this.product
    // this.cartArray = this.cartService.addToCart(this.product);
    //this.cartArray.push(this.product);
    //console.log(this.cartArray);    
  }
  
  removeFromCart(val) {
    this.cartArray = this.cartArray.filter(t => t.Product !== val.Product);
    this.sum = this.sum - Number(val.Price);
    console.log("Sum in cart",this.sum);

  }
  // total(cartArray){
  //   this.sum=this.cartService.total(cartArray);
  // } 

}
