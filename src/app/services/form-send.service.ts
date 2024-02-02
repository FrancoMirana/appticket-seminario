import { Injectable } from '@angular/core';
import { FormularioPage } from '../formulario/formulario.page';

@Injectable({
  providedIn: 'root'
})
export class FormSendService {

  constructor() { }

  validateEmail(formInfo:any){
    return new Promise((acept,reject)=>{


      if (formInfo.email !== 'franco@gmail.com') {
        acept('Se ha registrado correctamente');
      } else {
        console.log('El correo ingresado ya esta registrado');
        
        reject('El correo ingresado ya esta registrado');
      }

    })
  }
}
