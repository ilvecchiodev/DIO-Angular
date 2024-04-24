import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleSumComponent } from './article-sum.component';


@NgModule({
  declarations: [ ArticleSumComponent ],
  exports: [ ArticleSumComponent ],
  imports: [
    CommonModule
  ]
})
export class ArticleSumModule { }
