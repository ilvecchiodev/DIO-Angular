import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent implements OnDestroy {

  ngOnDestroy(): void {
  }
}
