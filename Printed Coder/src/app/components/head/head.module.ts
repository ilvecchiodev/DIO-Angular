import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head.component';
import { SocialMediasModule } from './../social-medias/social-media.module';

@NgModule({
  declarations: [ HeadComponent ],
  exports: [ HeadComponent ],
  imports: [
    CommonModule,
    SocialMediasModule
  ]
})
export class HeadModule { }
