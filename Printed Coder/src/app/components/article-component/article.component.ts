import { Component, Input } from '@angular/core';
import { ArticleInterface } from '../../interfaces/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input() article!:ArticleInterface;
}
