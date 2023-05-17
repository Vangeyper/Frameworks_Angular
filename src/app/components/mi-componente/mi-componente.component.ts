import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {

    // podemos definir propiedades, indicando el scope y el tipo
    public title: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;


    constructor() {

        this.title = 'Primer Componente';
        this.comentario = 'Nada a destacar';
        this.year = 2023;
        this.mostrarPeliculas = true;
        console.log('Componente cargado!');        
    }

    ocultarPeliculas() {
        this.mostrarPeliculas = false;
    }
}