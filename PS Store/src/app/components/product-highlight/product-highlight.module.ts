import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHighlightComponent } from './product-highlight.component';



@NgModule({
  declarations: [
    ProductHighlightComponent
  ],
  exports: [
    ProductHighlightComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductHighlightModule { }
