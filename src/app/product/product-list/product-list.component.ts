import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CartService } from 'src/app/cart';
import { ProductService } from '../shared/product.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-prod',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  selectedCategory: Product[] = [];
  private productList: Product[] = [];
  private param: Params;
  constructor(private productService: ProductService,
              private cartService: CartService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscribeProductList();
  }

  subscribeProductList() {
    this.route.params.subscribe(param => {
      this.param = param;
      this.productList = this.productService.listArray;
      if (!this.productList.length) {
        this.productService.getJSON().subscribe(data => {
          this.productList = data;
          this.selectedCategory = this.productList.filter(val => val.category === this.param.category);
          this.cartService.cartSubject$.subscribe(val => {
            const checkArray = val;
            this.selectedCategory = this.productService.checkIfAdded(checkArray, this.selectedCategory);
          });
        });
      }
    });
  }

  addToCart(data: object) {
    this.cartService.addToCart(data);
  }

  // Moves to Detailed description page and sends content of selected product to be displayed
  routeToDescription(val) {
    this.router.navigateByUrl('About');
    this.productService.routeToDescription(val);
  }

}
