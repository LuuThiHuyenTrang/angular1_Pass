import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { SigninComponent } from './page/signin/signin.component';
import { SignupComponent } from './page/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    PageNotFoundComponent,
    ProductFormComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
