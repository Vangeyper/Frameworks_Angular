import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
//import { AngularFileUploaderModule } from "angular-file-uploader";
import { HttpClientModule } from '@angular/common/http'; // necesario para las peticiones http en Angular
//import { MomentModule } from 'angular2-moment';
//import * as moment_ from 'moment';
//export const moment = moment_["default"];


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

// PIPES
import { EsParPipe } from './pipes/espar.pipe';
import { ArticlesComponent } from './components/articles/articles.component';
import { AmTimeAgoPipe } from './pipes/amTimeAgo.pipe';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    MiComponenteComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    PeliculasComponent,
    ErrorComponent,
    PeliculaComponent,
    EsParPipe,
    ArticlesComponent,
    AmTimeAgoPipe,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
    //AngularFileUploaderModule
    //MomentModule
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
