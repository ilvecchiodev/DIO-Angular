import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { LogotypeComponent } from './components/logotype/logotype.component';
import { ProductCardModule } from './components/product-card/product-card.module';
import { MenuModule } from './components/menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    LogotypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    ProductCardModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
