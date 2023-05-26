import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Article } from "../models/Article";
import { Global } from "./Global";


@Injectable()
export class ArticleService {

    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
        console.log('>>>>>>>>>>>' + this.url);
    }

    pruebasServicio() {
        return "Soy el servicio de articulos!!!";
    }

    getArticles( last: any = null ):Observable<any> {

        let articles = "articles";
        if ( last != null ) {
            articles += "/true";
        } 
        
        return this._http.get( this.url + articles );
    }

    getArticle( articleId ):Observable<any> {

        return this._http.get( this.url + 'article/' + articleId );
    }

    search( searchString ):Observable<any> {
        
        return this._http.get( this.url + 'search/' + searchString );
    }

    create( article ):Observable<any> {
        
        const params = JSON.stringify( article );
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post( this.url + 'save', params, {headers: headers} );
    }
}
