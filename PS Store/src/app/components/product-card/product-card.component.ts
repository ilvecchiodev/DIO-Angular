import { Component, Input, OnDestroy, input } from '@angular/core';
import { ProductData } from '../../models/product.data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnDestroy {

  @Input() product:ProductData = {
    highlight:'',
    id:'',
    mediaType:'',
    platforms:[],
    price:0,
    title:'',
    sell_slogan:'',
    cover:''
  }

  ngOnDestroy(): void {
  }
}
