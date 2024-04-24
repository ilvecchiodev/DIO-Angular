import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

  title:string= "The\nPrinted Coder"
  subTitle:string = 'algumas coisas sobre desenv, IA...'
}
