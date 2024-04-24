import { Component, Input } from '@angular/core';
import { ArticleInterface } from '../../interfaces/article.interface';

@Component({
  selector: 'app-articles-sum',
  templateUrl: './article-sum.component.html',
  styleUrl: './article-sum.component.css'
})
export class ArticleSumComponent {
  @Input() article_sum!:ArticleInterface;
  @Input() showLink:boolean = true;
}
