import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { ProductInfoModule } from '../product-info/product-info.module';
import { ProductHighlightModule } from '../product-highlight/product-highlight.module';

@NgModule({
  declarations: [
    ProductCardComponent
  ],
  exports: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductInfoModule,
    ProductHighlightModule
  ]
})
export class ProductCardModule { }
