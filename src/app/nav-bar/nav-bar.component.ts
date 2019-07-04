import { Component, OnInit } from '@angular/core';
import { List } from '../product/shared/product.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private list: List) {

   }

  ngOnInit() {
  }
  
  men() {

  }
  

}
