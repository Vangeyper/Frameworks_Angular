import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string;
  public apellidos: string;

  constructor (
    private _route: ActivatedRoute,   
    private _router: Router 
  ) { 
    this.nombre = '';    
    this.apellidos = '';
  }

  ngOnInit(): void {
    // nos suscribimos a lo que se llama en Angular un Observable, viene a ser un elemento que puede ser asíncrono 
    this._route.params.subscribe((params: Params) => {
      console.log(params);  // muestra los parámetros de la URL al llamarla
      this.nombre = params['nombre'];
      this.apellidos = params['apellidos'];
   })
  }

  redireccion () {
    // this._router.navigate(['/formulario']); // sin parámetros

    this._router.navigate(['/pagina-de-pruebas', 'Victor', 'Robles']); // con parámetros
  }
}
