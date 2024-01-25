import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
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
       div_titulo_css:"div_titulo-b",
       titulo_css:"titulo_inicio-b",
       titulo_1: "Esta es nuestra app",
       p1_css:"p1",
       parrafo_1:"Accede a un mundo de eventos de forma facil y segura",
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
     },
     {
       mosaico:"fondo2",
       id_slide_css:"slides2",
       div_titulo_css:"div_titulo-b",
       titulo_css:"titulo_inicio-b",
       titulo_1: "",
       p1_css:"p1s3",
       parrafo_1:"Vive! \n Disfruta!",
       section_img_css:"",
       class_img_logo_css:"",
       img_logo:"",
       titulo_2: "",
       p2_css:"p2s3",
       parrafo_2:"De los mejores eventos",
       section_imagenes_css:"position-b",
       class_imagenes:"hincha-b",
       imagen_3:"",
       imagen_2:"",
       imagen_1:""
     },
     
 
   ]
  constructor(
    private storage: Storage
  ) { }

  

  ionViewDidEnter(){
    console.log("ya vi la intro");
    ///codigo set mostrar intro
    this.storage.set('mostreIntro',true);
    
  }

}
