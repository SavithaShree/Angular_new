import { Component, OnInit } from '@angular/core';
import { List } from '../sharedservices/product.service';
import { CartService } from 'src/app/cart/sharedservices/cart.service';
// import { appRoutes } from 'src/app/routerConfig';
import { Router } from '@angular/router';


@Component({
  selector: 'prod-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //private listdata: any= []
  sortArray: any=[];
  //sample: Object;
  sample:any=[];
  // product: object;
  constructor(private list: List,
    private cartService: CartService,
    private router: Router) { }

   ngOnInit() {
  //   this.list.getJSON().subscribe(data => {
  //     this.listdata=data;
  //     console.log(this.listdata);
  // });
  }
  sort(val){  
    
      this.sortArray=this.list.sort(val);
  }

  clickAddToCart(val1, val2){
    this.sample={
          Product: val1,
          Price: val2
    }
    
        this.cartService.addToCart(this.sample);
      }
  // clickAddToCart(val1, val2){
  //   this.sample={
  //     Product: val1,
  //     Price: val2
  //   }
  //   alert("hi");
  //   console.log(this.sample);
  //   this.cartService.addToCart(this.sample);
  // }
  
  newPage(val){
    this.router.navigateByUrl('Dashboard/detailedList');
    this.list.detailedPage(val);

  }

 }

