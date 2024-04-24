import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductData } from '../../models/product.data';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent implements OnInit, OnDestroy{

  products:ProductData[]=[];

  ngOnInit(): void {
    this.products = [
      { highlight:'Exclusivo',mediaType:'Jogo Completo', id:'GOWRBR', platforms:['PS5', 'PS4'], price:349.00, sell_slogan:'Jogue Agora!', title:'God Of War Ragnarök', cover:'./../../../assets/GOW.png' },
      { highlight:'',mediaType:'Mídia Digital', id:'DIVBR', platforms:['PS5', 'PS4', 'PC'], price:600.00, sell_slogan:'Pré-Venda', title:'Diablo IV', cover:'./../../../assets/diabloIV.png' },
      { highlight:'',mediaType:'Jogo Completo', id:'SKRBR', platforms:['PS5', 'PS4', 'PS3', 'PC'], price:280.90, sell_slogan:'Jogue Agora!', title:'Skyrim', cover:'./../../../assets/skyrim.png' },
      //{ highlight:'',mediaType:'Jogo Completo', id:'HFWBR', platforms:['PS5', 'PS4'], price:199.45, sell_slogan:'Jogue agora!', title:'Horizon Forbidden West', cover:'./../../../assets/horizon.png' },
    ]
  }

  ngOnDestroy(): void {
  }
}
