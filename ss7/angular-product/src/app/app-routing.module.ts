import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {FindIdProductComponent} from './product/find-id-product/find-id-product.component';
import {RemoveProductComponent} from './remove-product/remove-product.component';


const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
}, {
  path: 'product/create',
  component: ProductCreateComponent
}, {
  path: 'product',
  children: [{
    path: 'find/:id',
    component: FindIdProductComponent
  }]
}, {
  path: 'product',
  children: [{
    path: 'delete/:id',
    component: RemoveProductComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
