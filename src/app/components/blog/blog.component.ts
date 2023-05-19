import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service'; // importamos el servicio de artículos
import { Article } from 'src/app/models/Article';
import { Global } from 'src/app/services/Global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]  // para uso del servicio de artículos
})
export class BlogComponent implements OnInit {

  public articles: Article[];
  public url: string;

  constructor(
    private _articleService: ArticleService
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    console.log(this._articleService.pruebasServicio());


    this._articleService.getArticles().subscribe( 
        ( response ) => { 
          if( response.articles ) {
            this.articles = response.articles;
          } 
        },        
        ( error ) => { 
          console.log( error );        
        }
    );
    
  }
}
