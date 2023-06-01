import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public user: any;
  public article: Article;
  public status: string;

  selectedFile: File;
  //Es el array que contiene los items para mostrar el progreso de subida de cada archivo
  message = '';
  fileName = "";
  fileInfos: Observable<any>;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    
    this.article = new Article( '', '', '', null, null );
  }

  ngOnInit(): void {
    
    //this.fileInfos = this._articleService.getImage();
  }

  selectFile( event ) {

    this.fileName = event.target.files[0].name;
    this.selectedFile = event.target.files[0];
    console.log('Fichero seleccionado: ' + this.selectedFile + ' de nombre: ' + this.fileName );

  }

  upload( ) {
    
    console.log('Vamos a subir el fichero: ' + this.selectedFile + ' de nombre: ' + this.fileName );
    this._articleService.upload( this.selectedFile ).subscribe(
      event => {          
          this.fileInfos = this._articleService.getImage( this.fileName );        
          console.log( '>>> fileInfos: ' + this.fileInfos );
          this.fileInfos.subscribe( 
            response => {
              this.article.image = response;
            }
          );
      },
      err => {
        this.message = 'No se puede subir el archivo ' + this.fileName;
        console.log( '>>> ERROR >>> ' + this.message );
      });
  }

  onSubmit() {
    
    this._articleService.create( this.article ).subscribe(
      ( response ) => {
        if( response.status == 'success' ) {
          this.status = 'success';
          this.article = response.article;
          this._router.navigate(['/blog']);
        }
      },
      ( error ) => {
        console.log( error );
        this.status = 'error';
      }
    )
  }
}
