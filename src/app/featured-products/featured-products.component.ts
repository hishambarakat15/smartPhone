import {Component, OnChanges, OnInit} from '@angular/core';
import {product} from "../models/product";
import {ProductService} from "../services/product.service";
declare var $: any;
@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit ,OnChanges {
   private Products: product[] =[];
  constructor(private ps: ProductService) {



      this.Products = this.ps.getAllProducts();

      console.log(this.Products);

  }

  ngOnInit() {
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



  ngOnChanges(){
      console.log(this.Products);


  }

}
