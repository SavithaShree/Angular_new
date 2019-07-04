import { Component, OnInit } from '@angular/core';
import { List } from '../product/sharedservices/product.service';
//import { SharedModule } from '../shared/shared.module'

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
