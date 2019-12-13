import { Component, OnInit } from '@angular/core';
import {product} from "../models/product";
import {ProductService} from "../services/product.service";
import {element} from "protractor";
declare var $: any;

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {
  produts: product[]= [];
  newProducts: product[] = [];
  constructor( private ps: ProductService ) {

    this.newProducts = this.ps.getNewProduct();
    console.log(this.newProducts);




  }

  ngOnInit(){

      $(document).ready(function(){
          $('.owl-carousel').owlCarousel({
              autoplay:true,
              autoplayTimeout:5000,
              autoplayHoverPause:true,
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:3
                  },
                  960:{
                      items:4
                  },

              },
              loop:true,

          });
          // alert(1);
      });
  }

}
