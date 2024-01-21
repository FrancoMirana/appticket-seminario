import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slides=[
   {
      mosaico:"",
      id_slide_css:"slide_inicio",
      div_titulo_css:"div_titulo",
      titulo_css:"titulo_inicio",
      titulo_1: "BIENVENIDOS",
      p1_css:"",
      parrafo_1:"",
      section_img_css:"logo",
      class_img_logo_css:"imagen_logo",
      img_logo:"assets/img/app_logo.svg",
      titulo_2: "aqui va texto",
      p2_css:"",
      parrafo_2:"",
      section_imagenes_css:"position",
      class_imagenes:"hincha",
      imagen_3:"assets/img/hincha3.png",
      imagen_2:"assets/img/hincha2.png",
      imagen_1:"assets/img/hincha1.png",
      
      
    },
    {
      mosaico:"fondo",
      id_slide_css:"slides2",
      fondo_css:"fondo",
      div_titulo_css:"div_titulo-b",
      titulo_css:"titulo_inicio-b",
      titulo_1: "Esta es nuestra app",
      p1_css:"p1",
      parrafo_1:"Accede a un mundo de eventos de forma facil y seguro",
      section_img_css:"logo-b",
      class_img_logo_css:"imagen_logo-b",
      img_logo:"assets/img/iconos.svg",
      titulo_2: "",
      p2_css:"p2",
      parrafo_2:"Todo al alcance de tu mano y muy facil",
      section_imagenes_css:"position-b",
      class_imagenes:"hincha-b",
      imagen_3:"",
      imagen_2:"",
      imagen_1:""
    }
  ]
  constructor() {}

}
