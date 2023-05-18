import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/Pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;

  constructor() {
    this.titulo = "Componente Películas";
    this.peliculas = [
      new Pelicula( "Spiderman IV", 2019, "https://depor.com/resizer/1rXVVbd2pBfrAqtfHEruB7BOMZo=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IJFGMKBMJ5DATPRGIIPPPCNNXI.jpg" ),
      new Pelicula( "Vengadores", 2015, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSOYpQwlTE8BoTzkh6qFMVZlu0c5YWGALPQ&usqp=CAU"),
      new Pelicula( "Batman vs Superman", 2018, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Kmw8YXmXzUXiuwRZwEj_XVK8rRuzOIub2A&usqp=CAU"),
    ];
    console.log("Constructor lanzado!");    
  }

  ngOnInit(): void {    
    console.log("Componente iniciado!");
  }

  ngDoCheck(): void {
    console.log("DOCHECK lanzado!");
  }

  cambiarTitulo() {
    this.titulo = "Nuevo Componente de Películas";
  }

  ngOnDestroy(): void {
    console.log("Componente antes de destruirse!");
  }

  mostrarFavorita( event ) {
    if (event && event.pelicula)
      this.favorita = event.pelicula;
  }

}
