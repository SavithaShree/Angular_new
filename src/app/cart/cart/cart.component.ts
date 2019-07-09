import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../sharedservices/cart.service';
import { Subscription } from 'rxjs';
import { List } from 'src/app/product/sharedservices/product.service'
// import { totalmem } from 'os';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
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
      console.log(this.cartArray.length);
      this.cartArray.push(array);
      console.log(this.cartArray);
      console.log(this.sum);


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
  // addToCart(val){
  //   this.cartArray=this.cartService.addToCart(val);

  // }
  removeFromCart(val) {
    //val.isFound=true;
    // this.list.RemoveCart(val);
    this.cartArray = this.cartArray.filter(t => t.Product !== val);
    this.sum = this.sum - val.Price;
    // total(this.cartArray)
    // this.todos = this.todos.filter(t => t.label !== todo.label);

  }
  // total(cartArray){
  //   this.sum=this.cartService.total(cartArray);
  // }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }  

}
