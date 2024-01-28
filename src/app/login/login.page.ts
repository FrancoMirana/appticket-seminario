import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import{AuthService} from'../services/auth.service';
import { NavController} from '@ionic/angular';

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
    //validaciones para
  }

  loginMessage:any;
  constructor(
     private formBuilder:FormBuilder,
     private authService:AuthService,
     private navCtrl: NavController

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
        

      )
      })

    }

  ngOnInit() {
  }
  login(login_date: any){
    console.log(login_date) 
    this.authService.loginUser(login_date).then(res=>{
      console.log(res);
      
      this.loginMessage = res;
      this.navCtrl.navigateForward('/home')
    }).catch(err=>{
      this.loginMessage=err;
    });
  }
}
