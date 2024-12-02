import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoUsuarioComponent } from './pages/usuario/listado-usuario/listado-usuario.component';
import { RegistroComponent } from './pages/usuario/registro/registro.component';

const routes: Routes = [
  {path: "", component : ListadoUsuarioComponent},
  {path: "registro", component : RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
