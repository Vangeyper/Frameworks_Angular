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

    getArticles():Observable<any> {
        return this._http.get(this.url + 'articles');
    }
}