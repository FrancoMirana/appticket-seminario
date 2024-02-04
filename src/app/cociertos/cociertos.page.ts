
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-cociertos',
  templateUrl: './cociertos.page.html',
  styleUrls: ['./cociertos.page.scss'],
})
export class CociertosPage  {
nameCategorie:any
  idCat:any;
event_List_Server:any;
event_List_locales:any;


  constructor(
    private router:Router,
    private strorage: Storage,
    private events : EventsService,
    private navCtrl:NavController
    ) {}


ionViewDidEnter(){
   this.event_List_locales = this.events.getLocalEvents().events;
   console.log(this.event_List_locales);
   this.strorage.get('id_cat').then((res)=>{
    this.idCat=res;
    
   }).catch((err)=>{
    console.log(err);
    
   });;
   this.strorage.get('categorias').then((res)=>{
    this.nameCategorie=res;
    
   }).catch((err)=>{
    console.log(err);
    
   });
   
   
   
}

}
