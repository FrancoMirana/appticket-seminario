import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slides=[
    {
      titulo_1: "BIENVENIDOS",
      titulo_2: "aqui va texto",
      parrafo_1:"",
      parrafo_2:"",
      id_slide_css:"slide_inicio",
      div_titulo_css:"div_titulo",
      titulo_css:"titulo_inicio",
      section_img_css:"logo",
      class_img_logo_css:"imagen_logo",
      img_logo:"assets/img/app_logo.svg",
      section_imagenes_css:"position",
      class_imagenes:"hincha",
      imagen_3:"assets/img/hincha3.png",
      imagen_2:"assets/img/hincha2.png",
      imagen_1:"assets/img/hincha1.png",
      p1_css:"",
      p2_css:""
    },
    {
      titulo_1: "Esta es nuestra app",
      titulo_2: "aqui va texto",
      parrafo_1:"Accede a un mundo de eventos de forma facil y seguro",
      parrafo_2:"Todo al alcance de tu mano y muy facil",
      id_slide_css:"slides",
      div_titulo_css:"div_titulo",
      titulo_css:"titulo_inicio",
      section_img_css:"logo",
      class_img_logo_css:"imagen_logo",
      img_logo:"assets/img/iconos.svg",
      section_imagenes_css:"",
      class_imagenes:"hincha",
      imagen_1:"",
      imagen_2:"",
      imagen_3:"",
      p1_css:"p1",
      p2_css:"p2"
      
    }
  ]
  constructor() {}

}
