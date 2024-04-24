import { Component, Input, OnDestroy } from '@angular/core';
import { ProductData } from '../../models/product.data';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent implements OnDestroy{

  @Input() product_info:ProductData= {
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
