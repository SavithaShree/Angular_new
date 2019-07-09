import { Component, OnInit } from '@angular/core';
import { List } from '../sharedservices/product.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart/sharedservices/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-product',
  templateUrl: './detailed-product.component.html',
  styleUrls: ['./detailed-product.component.css']
})
export class DetailedProductComponent implements OnInit {
  // sortArray: any=[];
  detailedArray: any=[];
  sample: object;
  private subscribtion: Subscription;

  constructor(private list: List,
    private cartService: CartService,
    private router: Router) { } 

  ngOnInit() {
    this.subscribtion=this.list.detailed.subscribe(val =>{
      this.detailedArray=val})
      console.log(this.detailedArray);

  }
  clickAddToCart(val1, val2){
    this.sample={
          Product: val1,
          Price: val2
    }
    
        this.cartService.addToCart(this.sample);
      }
  backPage(){
    this.router.navigateByUrl('Dashboard/productList');
  }
// newPage(val){
//   this.sortArray=this.list.newPage(val);
//   console.log(this.sortArray);
// }

}
