import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/Pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

    @Input() pelicula: Pelicula = { title:"", year: 2015, image:"" };
    @Output() MarcarFavorita = new EventEmitter();

    constructor() {}

    seleccionar( event: Event, pelicula: Pelicula ) {
      this.MarcarFavorita.emit({
        pelicula: pelicula
      })
    }
}
