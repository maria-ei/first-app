import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
         { path: '', component: ProductsListComponent,
      },
         { path: 'products/:productId', component: ProductDetailComponent },
         { path: 'cart', component: CartComponent },
       ])   ],
   declarations: [
      AppComponent,
      ProductsListComponent,
      ProductDetailComponent,
      CartComponent,
      NavBarComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/