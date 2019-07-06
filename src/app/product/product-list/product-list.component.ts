import { Component, OnInit } from '@angular/core';
import { List } from '../sharedservices/product.service';
import { CartService } from 'src/app/cart/sharedservices/cart.service';
@Component({
  selector: 'prod-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //private listdata: any= []
  sortArray: any=[];
  product: object;
  constructor(private list: List,
    private cartService: CartService) { }

   ngOnInit() {
  //   this.list.getJSON().subscribe(data => {
  //     this.listdata=data;
  //     console.log(this.listdata);
  // });
  }
  sort(val){  
    
      this.sortArray=this.list.sort(val);
  }
  

 }

