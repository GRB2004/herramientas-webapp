import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoScreenComponent } from './screens/nuevo-screen/nuevo-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { RegistroProductoComponent } from './screens/registro-producto/registro-producto.component';

const routes: Routes = [
  //Aqui se agregan cada una de las rutas del proyecto
  { path: '', component: NuevoScreenComponent, pathMatch: 'full'},
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full'},
  { path: 'login', component: LoginScreenComponent, pathMatch: 'full'},
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full'},
  { path: 'registro-producto', component: RegistroProductoComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
