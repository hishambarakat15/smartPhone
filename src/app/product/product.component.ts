import {Component, Input, OnInit} from '@angular/core';
import {product} from "../models/product";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() currentProduct: product = null;
  constructor( private cartService: CartService) { }

  ngOnInit() {
  }

    onAddToCart() {
        let amount = prompt("Enter the Number of Required items ?");
      if(amount){
          let intAmount = parseFloat(amount);
          if (intAmount > this.currentProduct.amountLeft ){
            alert("the Number You Want Not Avilable Now ");
            return;
          }
          this.cartService.addItemsToCart(this.currentProduct.id,intAmount);
          this.currentProduct.amountLeft = this.currentProduct.amountLeft - intAmount;
          this.cartService.getCartItem();
      }

    }
}
