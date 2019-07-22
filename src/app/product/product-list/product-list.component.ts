import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CartService } from 'src/app/cart';
import { ProductService } from '../shared/product.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'prod-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  private selectedCategory: Product[] = [];
  private productList: Product[] = [];
  private param: any;
  constructor(private productService: ProductService,
              private cartService: CartService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscribeFunction();
  }

  subscribeFunction() {
    this.route.params.subscribe(param => {
      this.param = param;
      this.productList = this.productService.listArray;
      if (this.productList.length === 0) {
        this.productService.getJSON().subscribe(data => {
          this.productList = data;
          this.selectedCategory = this.productList.filter(val => val.Category === this.param.category);
          this.cartService.cartSubject$.subscribe(val => {
            const checkArray = val;
            this.selectedCategory = this.productService.checkIfAdded(checkArray, this.selectedCategory);
          });
        });
      }
    });
  }

  addToCart(data) {
    this.cartService.addToCart(data);
  }

  // Moves to Detailed description page and sends content of selected product to be displayed
  newPage(val) {
    this.router.navigateByUrl('About');
    this.productService.detailedPage(val);
  }

}
