import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TestStyleComponent } from './test-style/test-style.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { BlockHostComponent } from './block-host/block-host.component';
import { DataBindingComponent } from './data-binding/data-binding.component';


const routes: Routes = [
  {path: 'table', component: ProductListComponent},
  {path: 'form', component: AddProductComponent},
  {path: 'test-style', component: TestStyleComponent},
  {path: 'input', component: InputOutputComponent},
  {path: 'view', component: BlockHostComponent},
  {path: 'binding', component: DataBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
