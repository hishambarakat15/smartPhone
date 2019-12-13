import { Component, OnInit } from '@angular/core';
import {cartItem} from "../models/cartitems";
import {CartService} from "../services/cart.service";
import {ProductService} from "../services/product.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private cartItems: cartItem [] = [];
  isUser: boolean = false;
  constructor(private cartService: CartService , private productService: ProductService ,
              private authService: AuthService
  ) {

    this.cartItems = this.cartService.getCartItem();
    this.cartService.cartEE.subscribe(()=>{
        this.cartItems = this.cartService.getCartItem();

    })

  }

  ngOnInit() {
    this.authService.user.subscribe(user=>{
      console.log(user);
      if (user){
        this.isUser = true;
      } else {
        this.isUser = false;
      }
    })
  }

    logout() {
        this.authService.logout();
    }
}
