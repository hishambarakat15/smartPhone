import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {AppComponent} from "./app.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {LoginComponent} from "./Auth/login/login.component";
import {RegisterComponent} from "./Auth/register/register.component";
import {MyCartComponent} from "./my-cart/my-cart.component";
import {RecomendationComponent} from "./recomendation/recomendation.component";


const routes: Routes = [
    {path:"",component:HomeComponent },
    {path:"home",component:HomeComponent },
    {path:"about",component:AboutComponent },
    {path:"contact",component:ContactComponent},
    {path:"product/:id",component:ProductDetailsComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"cart",component:MyCartComponent},
    {path:"rec",component:RecomendationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
