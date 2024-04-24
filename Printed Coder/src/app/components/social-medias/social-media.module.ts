import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediasComponent } from './social-medias.component';


@NgModule({
  declarations: [ SocialMediasComponent ],
  exports: [ SocialMediasComponent ],
  imports: [
    CommonModule
  ]
})
export class SocialMediasModule { }
