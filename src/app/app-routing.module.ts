import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { SigninComponent } from './page/signin/signin.component';
import { SignupComponent } from './page/signup/signup.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/add', component: ProductFormComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
