import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
//import { ProductListComponent } from './product/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent
    //ProductListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CartModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
