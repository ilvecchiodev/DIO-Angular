import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrl: './social-medias.component.css'
})
export class SocialMediasComponent implements OnDestroy{

  @Input() horizontalPlacement:string = 'center';

  ngOnDestroy(): void {
  }
}
