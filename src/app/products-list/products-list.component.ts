import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {products} from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  {
products=products;
itemInCart=[];
count:number=0;
flag:boolean=false;
constructor(  private cartService:CartService
  )
{
}
addToCart(product,prodid) {
  for (let index = 0; index < this.itemInCart.length; index++) {
    console.log("item array");
    console.log(this.itemInCart[index]);
    console.log("index");
    console.log(prodid);
if(prodid==this.itemInCart[index])
{ 
  products[prodid].quantity++;
  this.flag=true;
  

}  

  }
 if(this.flag==true)
 {console.log("Same");

  products[prodid].quantity++;

 } 
 else
 {
  this.itemInCart.push(prodid);
  this.cartService.addtocart(product);

 }
 console.log("Final Products");
 console.log(this.itemInCart);
 console.log("Products in cart");
 console.log(this.cartService.viewItem());

  //window.alert('Your product has been added to the cart!');
}
}
