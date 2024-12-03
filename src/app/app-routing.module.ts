import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/usuario/registro/registro.component';


const routes: Routes = [
  {path: "", component : IndexComponent},
  {path: "login", component : LoginComponent},
  {path: "home", component : HomeComponent},
  {path: "registro", component : RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
