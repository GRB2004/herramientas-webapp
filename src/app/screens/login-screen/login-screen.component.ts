import { FacadeService } from 'src/app/services/facade.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  //Aquí se definen las variables
  public type: String = "password";
  public username: String = "";
  public password: String = "";

  public errors:any = {};
  public users_registrados:any = [];

  constructor(
    private router: Router,
    public facadeService: FacadeService
  ) { }

  ngOnInit(): void {
    this.llenadoUsuarios();
  }
  public llenadoUsuarios(){
    this.users_registrados = [
      {
      'matricula': '202248699',
      'first_name': 'Gabriel',
      'last_name': 'Ramírez',
      'email': 'gabramba@gmail.com',
      'password': '2346',
      'confirmar_password': '2346',
      'fecha_nacimiento': '2004-10-23',
      'curp': 'RABG041023HPLMXBA6',
      'rfc': 'WQWDWQDWQDWQDW',
      'edad': '18',
      'telefono': '2381803929',
      'ocupacion': 'Estudiante',
      },
      {
      'matricula': '202248689',
      'first_name': 'GabrielJuan',
      'last_name': 'RamírezB',
      'email': 'gabramba@gmall.com',
      'password': '2346',
      'confirmar_password': '2346',
      'fecha_nacimiento': '2004-10-23',
      'curp': 'RABG041023HPLMXBA6',
      'rfc': 'WQWDWQDWQDWQDW',
      'edad': '18',
      'telefono': '2381803929',
      'ocupacion': 'Estudiante',
      }
    ];
    console.log("Usuario es: ",this.users_registrados)
  }

  public login(){
    //Validar
    this.errors = [];

    this.errors = this.facadeService.validarLogin(this.username, this.password);
    if(!$.isEmptyObject(this.errors)){
      return false;
    }
    //Si pasa la validación
    this.router.navigate(["home"]);
  }

  public showPassword(){
    if(this.type == "password"){
      this.type = "text";
    }else{
      this.type = "password";
    }
  }

  public goHome(){
    this.router.navigate(["home"]);
  }

}//Fin clase
