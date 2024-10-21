import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authformGuard } from './guard/authform.guard';

export const routes: Routes = [
   { path : 'products' , component : ProductListComponent},
   { path : 'products/add' , component : ProductAddComponent  , canActivate : [authformGuard]},
   { path : 'products/:id/update' , component : ProductEditComponent},
   { path : 'signin' , component : SigninComponent},
   { path : 'signup' , component : SignupComponent},

];
