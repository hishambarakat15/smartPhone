import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import {ProductService} from "./services/product.service";
import {CategoryService} from "./services/category.service";
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './product/product.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialsDetalisComponent } from './testimonials-detalis/testimonials-detalis.component';
import { OptionsComponent } from './options/options.component';
import { OptionsDetailsComponent } from './options-details/options-details.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import{ AngularFireAuthModule } from "@angular/fire/auth";
import { MyCartComponent } from './my-cart/my-cart.component';
import { RecomendationComponent } from './recomendation/recomendation.component';
import {AngularFirestore, AngularFirestoreModule, FirestoreSettingsToken} from "@angular/fire/firestore";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {environment} from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    NewArrivalsComponent,
    ProductComponent,
    FeaturedProductsComponent,
    TestimonialsComponent,
    TestimonialsDetalisComponent,
    OptionsComponent,
    OptionsDetailsComponent,
    FooterComponent,
    ProductDetailsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    MyCartComponent,
    RecomendationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      HttpClientModule,
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireStorageModule,
      AngularFireModule.initializeApp(environment.fireconf),



  ],
  providers: [
      ProductService,
      CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
