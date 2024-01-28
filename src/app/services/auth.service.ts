import { Injectable } from '@angular/core';
import { LoginPage } from '../login/login.page';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

    loginUser(credential:any){

      return new Promise((acept, reject)=>{
        if(credential.email == 'franco@gmail.com'&& credential.password == 'Nueva2023'){
          console.log( 'inicio correcto');
          
          acept('inicio correcto');
          
        }else{
            console.log("los datos son incorectos");
            
          reject("los datos son incorectos");
          
        }
      })
    }


}
