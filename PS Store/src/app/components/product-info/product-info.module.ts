import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './product-info.component';



@NgModule({
  declarations: [
    ProductInfoComponent
  ],
  exports: [
    ProductInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductInfoModule { }
