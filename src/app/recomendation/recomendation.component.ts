import { Component, OnInit } from '@angular/core';
import {product} from "../models/product";
import {ProductService} from "../services/product.service";
declare var $: any;
@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent implements OnInit {

  private products: product[] = [];
  constructor( private productServ: ProductService) {
      this.products = this.productServ.getAllProducts();
      console.log(this.products);

  }

  ngOnInit() {
    $(document).ready(function () {
      $(".filtr-container").filterizr({

      })
        
    })
  };

}
