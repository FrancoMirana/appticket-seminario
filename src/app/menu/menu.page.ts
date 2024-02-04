import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { EventsService } from '../services/events.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
categorias:any;

  constructor(
    private menu:MenuController,
    private navCtrl: NavController,
    private events : EventsService,
    private storage: Storage
  ) { }

  ngOnInit() {
  }
closeMenu(){
  this.menu.close();
  
}
logout(){
  this.navCtrl.navigateRoot("/login")
}
//funciones para categorias
deportes(){
  this.categorias= this.events.getCategoriesLocals().categories;
  this.categorias.forEach((res:any) => {
    if(res.id==1){
      this.storage.set('categorias',`${res.name}`);
      this.storage.set('id_cat',`${res.id}`);
      this.goToHome();
      this.closeMenu();
      
     
    }
  });
}
conciertos(){
 
    this.categorias= this.events.getCategoriesLocals().categories;
    this.categorias.forEach((res:any) => {
      if(res.id==2){
        this.storage.set('categorias',`${res.name}`);
        this.storage.set('id_cat',`${res.id}`);
        this.goToCociertos();
        this.closeMenu();
        
       
      }
    });
  }
  funciones(){
 
    this.categorias= this.events.getCategoriesLocals().categories;
    this.categorias.forEach((res:any) => {
      if(res.id==3){
        this.storage.set('categorias',`${res.name}`);
        this.storage.set('id_cat',`${res.id}`);
        this.goToFunciones();
        this.closeMenu();
        
      }
    });
  }
  goToHome(){
    this.navCtrl.navigateForward('menu/home')
  }
  goToCociertos(){
    this.navCtrl.navigateForward('menu/cociertos')
  }
  goToFunciones(){
    this.navCtrl.navigateForward('menu/funciones')
  }
  
}
