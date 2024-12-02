import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './pages/usuario/perfil/perfil.component';
import { RegistroComponent } from './pages/usuario/registro/registro.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { CrearEmpComponent } from './pages/emprendimiento/crear-emp/crear-emp.component';
import { ListaEmpComponent } from './pages/emprendimiento/lista-emp/lista-emp.component';
import { DetalleEmpComponent } from './pages/emprendimiento/detalle-emp/detalle-emp.component';
import { CrearPubComponent } from './pages/publicacion/crear-pub/crear-pub.component';
import { ListaPubComponent } from './pages/publicacion/lista-pub/lista-pub.component';
import { DestallePubComponent } from './pages/publicacion/destalle-pub/destalle-pub.component';
import { CrearActividadComponent } from './pages/actividad/crear-actividad/crear-actividad.component';
import { ListaActividadComponent } from './pages/actividad/lista-actividad/lista-actividad.component';
import { DetalleActividadComponent } from './pages/actividad/detalle-actividad/detalle-actividad.component';
import { ListaComComponent } from './pages/conversacion/lista-com/lista-com.component';
import { DetalleComComponent } from './pages/conversacion/detalle-com/detalle-com.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//importado HttpClienteModule ->HttpCliente
import { HttpClientModule } from '@angular/common/http';
import { ListadoUsuarioComponent } from './pages/usuario/listado-usuario/listado-usuario.component';
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    RegistroComponent,
    CrearEmpComponent,
    ListaEmpComponent,
    DetalleEmpComponent,
    CrearPubComponent,
    ListaPubComponent,
    DestallePubComponent,
    CrearActividadComponent,
    ListaActividadComponent,
    DetalleActividadComponent,
    ListaComComponent,
    DetalleComComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    ListadoUsuarioComponent,
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginComponent,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
