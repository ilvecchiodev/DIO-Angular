import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopMenuModule } from './components/top-menu/top-menu.module';
import { HeadModule } from './components/head/head.module';
import { ArticleSumModule } from './components/article-sum-component/article-sum.module';
import { ArticleModule } from './components/article-component/article.module';
import { SocialMediasModule } from './components/social-medias/social-media.module';

import { HrComponent } from './components/hr/hr.component';
import { FrontPageComponent } from './pages/frontpage/frontpage.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HrComponent,
    FrontPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopMenuModule,
    HeadModule,
    ArticleSumModule,
    ArticleModule,
    SocialMediasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
