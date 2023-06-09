import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Article[];
  public search: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService  
  ) {

  }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      const search = params['search'];

      //informamos el valor en la propiedad del componente para tenerlo en la vista
      this.search = search;

      this._articleService.search( search ).subscribe(
        ( response ) => {
          if ( response.articles ) {
            this.articles = response.articles;
          } else {
            // iniciamos el array vacio para los artículos para que paren la carga
            this.articles = [];
          }
        },
        ( error ) => {
          console.log( error );  
          // iniciamos el array vacio para los artículos para que paren la carga
          this.articles = [];        
        }
      )
    })
  }
}
