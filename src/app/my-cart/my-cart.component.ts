import { Component, OnInit } from '@angular/core';
import {cartItem} from "../models/cartitems";
import {CartService} from "../services/cart.service";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  cartitems: cartItem[] = [];
  constructor( private cartService: CartService , private productService: ProductService) {
    this.cartitems = this.cartService.getCartItem();
    console.log(this.cartitems);
  }

  clcOverallPrice(price:number, discount: number, amount: number){
    return price* (1 - discount/100)*amount;
  }
  clcTotalPrice(){
    let total = 0;
    for(const item of this.cartitems){
      const product = this.productService.getProductById(item.productId);
      total += this.clcOverallPrice(product.price,product.discount,item.amount);
    }
    return total;
  }

  onRemoveItemClick(id: string){
    this.cartService.removeCartItems(id);
  }
  ngOnInit() {
  }

}
