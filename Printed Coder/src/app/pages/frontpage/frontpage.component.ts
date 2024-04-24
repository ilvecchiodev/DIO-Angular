import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleInterface } from '../../interfaces/article.interface';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css'
})
export class FrontPageComponent implements OnInit, OnDestroy {

  article!:ArticleInterface;
  articles_sums:Array<ArticleInterface> = [];

  constructor(){}

  ngOnInit(): void {
    this.article = {
      picture:"./../assets/new-destak.png",
      title:"Admirável mundo novo da IA",
      content:"A inteligência artificial (IA) teve seus primeiros estudos na década de 1950, com o termo sendo cunhado em uma conferência de Dartmouth em 1956. Pesquisadores como Alan Turing, Herbert Simon e John McCarthy exploraram a ideia de criar máquinas capazes de resolver problemas de forma semelhante aos seres humanos. Nas décadas de 1950 e 1960, houve um período de otimismo, com o desenvolvimento de linguagens de programação específicas para IA, como o Lisp, e o surgimento dos primeiros programas para resolver problemas simples. No entanto, nas décadas de 1970 e 1980, a IA enfrentou um declínio devido a limitações tecnológicas, expectativas irreais e falta de financiamento, o que ficou conhecido como 'inverno da IA'. <br/><br/> O renascimento da IA ocorreu a partir da década de 1990, com avanços em hardware, algoritmos e disponibilidade de grandes conjuntos de dados. Empresas de tecnologia começaram a investir pesadamente em IA, resultando no desenvolvimento de assistentes virtuais, reconhecimento de fala, sistemas de recomendação e carros autônomos, entre outras aplicações. Avanços recentes em aprendizado profundo impulsionaram progressos significativos em reconhecimento de imagem, tradução automática, processamento de linguagem natural e outras tarefas complexas. No entanto, surgiram questões éticas e preocupações sobre o impacto da IA na sociedade, como privacidade de dados, viés algorítmico e automação de empregos, que estão sendo cada vez mais discutidas e debatidas. <br/><br/> A IA está cada vez mais integrada em muitos aspectos de nossas vidas, com aplicações em áreas como saúde, finanças, transporte, entretenimento e muito mais.",
      author:"Gilberto MacDroid",
      date: new Date()
    };
    this.articles_sums.push({ picture:"./../assets/news-thumbs-1.png", title:"Trabalho Remoto Funciona?", content:"Com o término da pandemia muitos profissionais ainda se encontram trabalhando remotamente, de suas casas, o chamado home office. Mas para as empresas esse modelo funciona mesmo?", author:"Gilberto MacDroid", date: new Date()});
    this.articles_sums.push({ picture:"./../assets/news-thumbs-5.png", title:"Admirável Mundo Novo da IA", content:"Os primeiros estudos sobre inteligência artifical remotam aos idos anos 50, 1956 para ser mais preciso, e de lá para cá muita coisa mudou...", author:"G-Bert", date: new Date()});
    this.articles_sums.push({ picture:"./../assets/news-thumbs-2.png", title:"Nova Geração de Consoles de Games", content:"Imagens reais, processamento turbinado, memórias inteligentes mas ainda não derrotaram o maior vilão de todos: o preço abusivo!", author:"ChatGPTron", date: new Date()});
    this.articles_sums.push({ picture:"./../assets/news-thumbs-3.png", title:"Como alavancar sua carreira em tempos de IA?", content:"Com tantas inovações em inteligência artificial aparecendo muitos profissionais ficam preocupados em perder seus empregos, mas calma a DIO chegou!", author:"Isa OS", date: new Date()});
  }

  ngOnDestroy(): void {
  }

}
