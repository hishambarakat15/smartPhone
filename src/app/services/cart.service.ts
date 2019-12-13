import {EventEmitter, Injectable} from '@angular/core';
import {cartItem} from "../models/cartitems";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: cartItem [] = [];
    private counter:number ;
    public cartEE = new EventEmitter<any>();
  constructor() {
  this.counter = 100;
  }

  getCartItem():cartItem []{
    return this.cartItems;
  }

  addItemsToCart(productId:string,amount: number) {
      //   let isFound  = false;
      //   for (let cartitem of this.cartItems){
      //     if (cartitem.id == productId){
      //       cartitem.amount += amount;
      //       isFound = true;
      //       break;
      //     }
      //   }
      //   if (!isFound){
      //     this.cartItems.push(new cartItem("product"+this.counter++,productId,amount))
      //   }
      //   console.log(this.cartItems);
      //   this.cartEE.emit();
      // }
      let isFound = false;
      for (let cartitem of this.cartItems) {
          if (cartitem.productId == productId) {
              cartitem.amount += amount;
              isFound = true;
              break;
          }
      }
      if (!isFound) {
          this.cartItems.push(new cartItem('product-' + this.counter++, productId, amount));
          console.log(this.cartItems);
          this.cartEE.emit();
      }
  }
    removeCartItems(id: string){
      let index = -1;
      for (const cartitem of this.cartItems){
          index++;
          if(cartitem.productId == id){
              break;
          }
      }
      if (index >=0){
          this.cartItems.splice(index,1);
      }
    }

}
