import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/Pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service'; // importamos un servicio

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]  // con este indicador ya podríamos hacer uso del servicio en nuestro componente
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;

  constructor( 
      private _peliculaService: PeliculaService // declaramos una variable privada para poder usar el servicio en nuestro constructor
    ) {    
    this.titulo = "Componente Películas";
    this.peliculas = this._peliculaService.getPeliculas();
    console.log("Constructor lanzado!");    
  }

  ngOnInit(): void {    
    console.log("Componente iniciado!");
    console.log(this._peliculaService.holaMundo()); // usamos el servicio
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
