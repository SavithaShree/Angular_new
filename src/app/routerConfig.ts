import { Routes, ChildActivationEnd } from '@angular/router';
import { CartComponent} from './cart/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductModule } from './product/product.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { DetailedProductComponent } from './product/detailed-product/detailed-product.component';

export const appRoutes: Routes = [
    {
    //     path: 'Dashboard',
    //     component: HomeComponent
    // },
    // {
    //     path: 'Dashboard/productList',
    //     component: ProductListComponent,
    //     //outlet: 'child1'
    // },
    // {
    //     path: 'Dashboard/detailedList',
    //     component: DetailedProductComponent,
    //     //outlet: 'child2'
    // }
        path: 'Dashboard',
        component: HomeComponent
        // children:[
        //     {
        //         path: 'productList',
        //         component: ProductListComponent,
        //         outlet: 'child1'
        //     }// ,
            // {
            //     path: 'detailedList',
            //     component: DetailedProductComponent,
            //     outlet: 'child2'
            // }
        //]
    },
    {
        path: 'productList',
        component: ProductListComponent
    }
];