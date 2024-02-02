import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import{AuthService} from'../services/auth.service';
import { NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;
  validation_messages= {
    email:[
      {type:"required",message:"El Email es obligatorio"},
      {type:"email",message:"El Email ingreesado no es valido"}
    ],
    password:[
      {type:"required",message:"La contraseña es obligatoria"},
      {type:"maxlength",message:"La clave ecxede el maximo de caracteres "},
      {type:"minlength",message:"La clave no contiene el minimo de caracteres "}
    ],
    //validaciones para
  }

  loginMessage:any;
  constructor(
     private formBuilder:FormBuilder,
     private authService:AuthService,
     private navCtrl: NavController,
     private storage: Storage

     ) 
    { 
      this.loginForm= this.formBuilder.group(
        {
        email: new FormControl(
          "",
          Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
          //se pueden realizar otras validaciones aqui
          ])
        ),
      password: new FormControl(
        "",
         Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(8)
         ])
        
      )
      })

    }

  ngOnInit() {
  }
  login(login_date: any){
    this.authService.loginUser(login_date).then(res=>{
      this.loginMessage = res;
      this.storage.set('userLoginIn',true)
      this.navCtrl.navigateForward('/home')
    }).catch(err=>{
      this.loginMessage=err;
    });
  }

  goToForm(){
    this.navCtrl.navigateForward('/formulario');

  }
}
