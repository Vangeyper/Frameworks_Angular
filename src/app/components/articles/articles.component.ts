import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { Global } from 'src/app/services/Global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  public url: string;
  @Input() articles: Article[];

  constructor() {
    this.url = Global.url;
  }
  
}
