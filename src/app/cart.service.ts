import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

constructor() { }

items=[];

addtocart(product)
{
  this.items.push(product);
}

viewItem()
{
  return this.items;
}

clearcart()
{
  this.items=[];
  return this.items;
}

}
