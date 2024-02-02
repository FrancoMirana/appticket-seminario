import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
event_List:any;
  constructor(
    private router:Router,
    private strorage: Storage,
    private events : EventsService
    ) {}


ionViewDidEnter(){
   this.events.getEvents().then(res=>{
    console.log(res);
    
    this.event_List=res;
   })
  console.log(this.events.getLocalEvents().events);
  
 
}

goToIntro(){
  console.log("go to intro");
  this.router.navigateByUrl('/intro');
  this.strorage.set('mostreIntro',false);

  
}


}
