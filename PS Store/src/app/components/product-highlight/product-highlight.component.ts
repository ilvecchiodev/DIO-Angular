import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-highlight',
  templateUrl: './product-highlight.component.html',
  styleUrl: './product-highlight.component.css'
})
export class ProductHighlightComponent implements OnDestroy {
  @Input() highlightText:string='';

  ngOnDestroy(): void {
  }
}
