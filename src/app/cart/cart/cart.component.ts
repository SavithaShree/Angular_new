import { Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import { CartService } from '../sharedservices/cart.service';
import { Subscription } from 'rxjs'; 
// import { totalmem } from 'os';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartArray: any=[];
  sum: number;
  private subscription: Subscription;

  constructor(private cartService: CartService) {
    
  }
 
  ngOnInit() { 
    this.subscription=this.cartService.cast.subscribe(array=>{
      this.cartArray.push(array);})
      // alert("hajkdhuwied");
     console.log(this.cartArray);
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
  removeFromCart(val){
    this.cartArray=this.cartArray.filter(t => t.Product !==val);
    // total(this.cartArray)
    // this.todos = this.todos.filter(t => t.label !== todo.label);

}
  total(cartArray){
    this.sum=this.cartService.total(cartArray);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }  

}
