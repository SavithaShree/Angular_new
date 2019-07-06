import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { CartService } from '../sharedservices/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartArray: any=[];

  constructor(private cartService: CartService
    ) {

  }
 
  ngOnInit() { 
    
    //console.log(this.product);
   // this.cartArray =this.product
   // this.cartArray = this.cartService.addToCart(this.product);
    //this.cartArray.push(this.product);
     //console.log(this.cartArray);    
  }
  clickAddToCart(val1, val2){
    this.cartArray=this.cartService.clickAddToCart(val1,val2);
  }

}
