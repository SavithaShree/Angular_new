import { Component, OnInit } from '@angular/core';
import { List } from '../sharedservices/product.service';
@Component({
  selector: 'prod-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private listdata: any=[];

  constructor(private list: List) { }

  ngOnInit() {
    this.list.getJSON().subscribe(data => {
      this.listdata=data;
      console.log(this.listdata);
  });
  }

}
