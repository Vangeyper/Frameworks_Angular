import { Pipe, PipeTransform } from '@angular/core';

// comprueba si un número es par o impar
@Pipe({
    name: 'espar'
})
export class EsParPipe implements PipeTransform {

    transform( value: any ) {
        let espar: string = "No es par";

        if ( value % 2 === 0) {
            espar = "Es par";
        }
        return "El año es: " + value + " y " + espar;
    }
}


