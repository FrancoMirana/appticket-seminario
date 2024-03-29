import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';
import { NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
idCat:any;
event_List_Server:any;
event_List_locales:any;
categoriesHome:any;

  constructor(
    private router:Router,
    private strorage: Storage,
    private events : EventsService,
    private navCtrl:NavController
    ) {}


ionViewDidEnter(){
   this.events.getEvents().then(res=>{
    
    
    this.event_List_Server=res;
    console.log(res);
    
    this.idCat=this.strorage.get('id_cat');
    this.categoriesHome.storage.get('categorias')
   })
   this.strorage.get('id_cat').then((res)=>{
    this.idCat=res;
    
   }).catch((err)=>{
    console.log(err);
    
   });;
   this.strorage.get('categorias').then((res)=>{
    this.categoriesHome=res;
    
   }).catch((err)=>{
    console.log(err);
    
   });
 
}



goToIntro(){
  console.log("go to intro");
  this.router.navigateByUrl('/intro');
  this.strorage.set('mostreIntro',false);

  
}





}
