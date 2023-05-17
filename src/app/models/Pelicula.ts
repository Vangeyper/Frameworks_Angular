export class Pelicula {
   
    // PROPIEDADES 

    // public title: string;
    // public year: number;
    // public image: string;

    // Constructor

    // constructor( title:string, year:number, image:string ) {
    //     this.title = title;
    //     this.year = year;
    //     this.image = image;
    // }

    // Contructor con la definición de propiedades: ahorramos teclear asignaciones innecesarias
    // IMPORTANTE: Esto equivale a lo anterior

    constructor (
        public title: string,
        public year: number,
        public image: string
    ) { }
}