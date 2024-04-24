import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu.component';
import { SocialMediasModule } from './../social-medias/social-media.module';

@NgModule({
  declarations: [ TopMenuComponent ],
  exports: [ TopMenuComponent],
  imports: [
    CommonModule,
    SocialMediasModule
  ]
})
export class TopMenuModule { }
