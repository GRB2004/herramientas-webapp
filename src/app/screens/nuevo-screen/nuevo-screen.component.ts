import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-screen',
  templateUrl: './nuevo-screen.component.html',
  styleUrls: ['./nuevo-screen.component.scss']
})
export class NuevoScreenComponent implements OnInit {
  //Aquí se definen las variables
  public type: String = "password";
  public username: String = "";
  public password: String = "";

  public errors:any = {};

  public users_registrados:any = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

public llenadoUsuarios(){
  this.users_registrados = [
    {
      'id': 'Leche',
      'nombre_producto': 'Leche',
      'precio': '240.00',
      'departamento': 'Lacteos',
    }
  ];
}
  public login(){
    if(this.username == ""){
      this.errors.username = "Campo requerido";
    }
    if(this.password == ""){
      this.errors.password = "Campo requerido";
    }
  }

  public showPassword(){
    if(this.type == "password"){
      this.type = "text";
    }else{
      this.type = "password";
    }
  }

  public goRegistro(){
    this.router.navigate(["registro"]);
  }

  public goRegistroProducto(){
    this.router.navigate(["registro-producto"]);
  }

}//Fin clase
