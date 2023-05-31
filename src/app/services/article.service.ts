import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from "rxjs";
import { Article } from "../models/Article";
import { Global } from "./Global";


@Injectable()
export class ArticleService {

    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.urlBackEnd;
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
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        console.log(">>>>>>>>> CREATE <<<<<<<<" + this.url);
        return this._http.post( this.url + 'save', params, {headers: headers} );
    }

    //Metodo que envia los archivos al endpoint /upload-image de nuestro backend 
    upload(file: File): Observable<HttpEvent<any>>{
        const formData: FormData = new FormData();
        formData.append('files', file);
    
        console.log(">>>>>>>>> URL >>>>>>>>>> " + `${this.url}/upload-image` + {formData});
        const headers = new HttpHeaders()
            .set('Access-Control-Allow-Origin', '*');
        const req = new HttpRequest('POST', `${this.url}upload-image`, formData, {
        reportProgress: true,
        responseType: 'json'
        });
        return this._http.request(req);
    }

    getImage( imageId ):Observable<any> {

        return this._http.get( this.url + 'get-image/' + imageId );
    }
}
