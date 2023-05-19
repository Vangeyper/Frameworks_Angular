import { Injectable } from "@angular/core"; // imprescindible para declarar un servicio
import { Pelicula } from "../models/Pelicula";

@Injectable()                   // decorador del servicio
export class PeliculaService {

    public peliculas: Pelicula[];

    constructor() {
        this.peliculas = [
            new Pelicula( "Spiderman IV", 2019, "https://depor.com/resizer/1rXVVbd2pBfrAqtfHEruB7BOMZo=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IJFGMKBMJ5DATPRGIIPPPCNNXI.jpg" ),
            new Pelicula( "Vengadores", 2015, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSOYpQwlTE8BoTzkh6qFMVZlu0c5YWGALPQ&usqp=CAU"),
            new Pelicula( "Batman vs Superman", 2018, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Kmw8YXmXzUXiuwRZwEj_XVK8rRuzOIub2A&usqp=CAU"),
        ];
    }

    holaMundo(){
        return 'hola mundo desde un servicio de angular !!!'
    }

    getPeliculas() {
        return this.peliculas;
    }
}