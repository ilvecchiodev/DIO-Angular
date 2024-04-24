import { Component } from '@angular/core';
import { ProductData } from './models/product.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ps-store';

  menu_links:string[] = ['Jogos', 'PS5', 'PS4', 'Serviços', 'Acessórios', 'Notícias', 'Loja', 'Suporte'];

}
