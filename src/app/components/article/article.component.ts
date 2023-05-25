import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service'; // cargamos el servicio
import { Article } from 'src/app/models/Article';
// para recoger un parámetro que viene en la url
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe( params => {
      const id = params['id'];
      console.log('encontrado');

      this._articleService.getArticle( id ).subscribe(
        ( response ) => {
          if( response.article ) {
            console.log('encontrado');
            this.article = response.article;
          } else {
            console.log('no encontrado');
            this._router.navigate(['/home']);
          }
        },
        ( error ) => {
          console.log( error );
        }
      );
    })
  }
}
