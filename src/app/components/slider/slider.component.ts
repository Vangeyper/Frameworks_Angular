import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

    @Input() propiedad_a_comunicar_al_hijo: string = "";
    @Input() version: string = "";
    @Input() size: string = "";

    constructor () {

    }
}
