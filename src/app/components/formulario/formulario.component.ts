import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  public user: any;
  public campo: string;

  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    };
  }

  onSubmit() {
    alert('Enviado!!!');
  }

  hasDadoClick() {
    alert("Has dado CLICK!");
  }

  hasSalido() {
    alert("Has salido BLUR!");
  }

  hasPulsadoEnter() {
    alert("Has pulsado Enter KEYUP!");
  }

}
