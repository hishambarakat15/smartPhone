import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {product} from "../models/product";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
private product:product;
  constructor(private activateR: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService) {
      this.activateR.params.subscribe((param) => {
          console.log(param);
          const id = param['id'];
          console.log(id);


          this.product = this.productService.getProductById(id);
          console.log(this.product);

      });
  }


  ngOnInit() {
  }
    onAddToCart(){
        let amount = prompt("Enter the Number of Required items ?");
        if(amount){
            let intAmount = parseFloat(amount);
            if (intAmount > this.product.amountLeft ){
                alert("the Number You Want Not Avilable Now ");
                return;
            }
            this.cartService.addItemsToCart(this.product.id,intAmount);
            this.product.amountLeft = this.product.amountLeft - intAmount;
            this.cartService.getCartItem();
        }
    }

}
