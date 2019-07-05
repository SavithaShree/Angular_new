import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { CartService } from '../sharedservices/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges {
  @Input() product: object;
  //cartArray: object[];
  
  constructor(//private cartService: CartService
    ) {

  }
 
  ngOnChanges() { 
    
    console.log(this.product);
   // this.cartArray = this.cartService.addToCart(this.product);
    // this.cartArray.push(this.product);
    // console.log(this.cartArray);    
  }

}
