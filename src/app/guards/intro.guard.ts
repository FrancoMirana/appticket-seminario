import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage-angular";
import { __await } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor (
     private router:Router,
     private storage:Storage
      ){};

 async canActivate(){
   
   const mostreIntro = await  this.storage.get('mostreIntro');
   if ( mostreIntro) {
    return true;
   }else{
    console.log('Entro al guard');
    this.router.navigateByUrl('/intro');
    return false ;

   }
   
   
   
   
    
   
  }
  
}
