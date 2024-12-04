import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/usuario/registro/registro.component';
import { ListaPubComponent } from './pages/publicacion/lista-pub/lista-pub.component';
import { DestallePubComponent } from './pages/publicacion/destalle-pub/destalle-pub.component';
import { ListadoUsuarioComponent } from './pages/usuario/listado-usuario/listado-usuario.component';



const routes: Routes = [
  {path: "", component : IndexComponent},
  {path: "login", component : LoginComponent},
  {path: "home", component : HomeComponent},
  {path: "registro", component : RegistroComponent},
  {path: "publicaciones", component : ListaPubComponent},
  {path: "listaPublicaciones", component : DestallePubComponent},
  {path: "listaUsuarios", component: ListadoUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
