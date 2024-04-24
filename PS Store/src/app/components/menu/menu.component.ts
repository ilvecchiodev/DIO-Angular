import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnDestroy{

  @Input() menu_items:string[] = [];

  ngOnDestroy(): void {
  }
}
