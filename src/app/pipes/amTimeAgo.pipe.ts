import { Pipe, PipeTransform } from '@angular/core';


// comprueba si un número es par o impar
@Pipe({
    name: 'amTimeAgo'
})
export class AmTimeAgoPipe implements PipeTransform {

    transform( value: Date ) {
        let newDate: string = "";        
        let horas;

        //console.log(value);

        value = new Date(value);
        //console.log(value);
        // if ( Object.prototype.toString.call(value) === "[object Date]" ) {
        //     console.log("value instanceof Date");
        // } else {
        //     console.log("NO ES value instanceof Date");
        // }

        // if ( !isNaN(value.getTime()) ) {
        //     console.log("isFinite( value.getTime())");
        // } else {
        //     console.log("NO ES isFinite( value.getTime())");
        // }

        if ( value instanceof Date && isFinite( value.getTime()) ) {
            //console.log("fecha correcta");
            const start = new Date(Date.now());
            const diferencia = start.getTime() - value.getTime();
            //console.log({diferencia});
            const minutos = diferencia / 1000 / 60;
            //console.log({minutos});
            if ( minutos >= 60 ) { 
                horas = minutos / 60;

                //console.log({horas});
                if ( horas >= 24 ) {
                    newDate = "Hace " + ( horas / 24 ) + " días";
                    const horasRestantes = horas % 24;
                    if ( horasRestantes >= 0 ) {
                        newDate = "Hace " + Math.trunc(( horas / 24 )) + " días y " + Math.trunc(horasRestantes) + ' horas';
                    }
                } else {
                    newDate = "Hace " + Math.trunc( horas ) + " horas";
                    
                }
            } else {
                newDate = "Hace " + Math.trunc( minutos ) + " minutos";
            }            
        }
        return newDate;
    }
}