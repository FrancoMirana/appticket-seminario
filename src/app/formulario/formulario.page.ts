import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import{FormSendService} from'../services/form-send.service';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  
})
export class FormularioPage implements OnInit {
formulario:FormGroup;
validation_messages= {
  nombre:[
    {type:"required",message:"Por favor ingresa un nombre"}
    
  ],
  apellido:[
    {type:"required",message:"Por favor ingresa un apellido"},
    
  ],
  email:[
    {type:"required",message:"El Email es obligatorio"},
    {type:"pattern",message:"El Email ingreesado no es valido"}
  ],
  password:[
    {type:"required",message:"La contraseña es obligatoria"},
    {type:"maxlength",message:"La clave ecxede el maximo de caracteres "},
    {type:"minlength",message:"La clave no contiene el minimo de caracteres "}
  ]
  //validaciones para
}
formMessage:any;
  constructor(
    private formBuilder:FormBuilder,
     private formSendService:FormSendService,
     private navCtrl: NavController,
  ) { 

    this.formulario= this.formBuilder.group(
      {
        nombre: new FormControl(
          "",
          Validators.compose([
            Validators.required
            //se pueden realizar otras validaciones aqui
            ])
          
        ),
        apellido: new FormControl(
          "",
          Validators.compose([
            Validators.required
            //se pueden realizar otras validaciones aqui
            ])
        ),
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
  formRegis(form_date:any){
    console.log(form_date);
    
    this.formSendService.validateEmail(form_date).then(res=>{
      this.formMessage=res;
      console.log("estas aqui  "+res);
      
      this.navCtrl.navigateForward('/home')
    }).catch(err=>{
      console.log(err);
      
      this.validation_messages=err;
    })
  }

}
