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

  constructor() {
    this.titulo = "Componente Películas";
    this.peliculas = [
      new Pelicula( "Spiderman IV", 2019, "https://depor.com/resizer/1rXVVbd2pBfrAqtfHEruB7BOMZo=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IJFGMKBMJ5DATPRGIIPPPCNNXI.jpg" ),
      new Pelicula( "Vengadores", 2015, "https://www.bing.com/images/search?view=detailV2&ccid=sT7ZUk%2fn&id=35B62C48B7A09322B0978D349FB3B7275666D6CB&thid=OIP.sT7ZUk_nihI3NVEqnxS6UQHaFd&mediaurl=https%3a%2f%2fwww.wallpapertip.com%2fwmimgs%2f26-261947_desktop-avengers-wallpaper-hd.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b13ed9524fe78a123735512a9f14ba51%3frik%3dy9ZmVie3s580jQ%26pid%3dImgRaw%26r%3d0&exph=1180&expw=1600&q=vengadores&simid=608002030536426137&FORM=IRPRST&ck=00EA00F9865D45D3FE778AB512791917&selectedIndex=5"),
      new Pelicula( "Batman vs Superman", 2018, "https://www.bing.com/images/search?view=detailV2&ccid=PwKAFIlB&id=F9766D3D4949ECA509E6876C6C8988CE5D87CB37&thid=OIP.PwKAFIlBmD85WoXpH2E3uwHaEo&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp2869152.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3f0280148941983f395a85e91f6137bb%3frik%3dN8uHXc6IiWxshw%26pid%3dImgRaw%26r%3d0&exph=1800&expw=2880&q=batman+vs+superman&simid=608016715022541870&FORM=IRPRST&ck=BFBF55F1241FF4CEFB46E172DA006232&selectedIndex=10"),
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

}
