import { Component } from '@angular/core';
//Se importa el servicio de usuario
import { UsuarioService, Usuario } from '../../../services/usuario.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: false,
  
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuario:Usuario={
    idUsuario: 0,
    nombre: '',
    apellido: '',
    correoElectronico: '',
    telefono: '',
    password: '',
    direccion: '',
    fotoPerfil: '',
    biografia: '',
    sitioWeb: '',
    activo: true,
    ciudad: '',

  }

  constructor(private usurioservicio: UsuarioService){}

  onSubmit():void{
    this.usurioservicio.createUsuario(this.usuario).subscribe({
      next:(result) => {
        alert('Usuario creado con Exito!!!')
      }, error:(e)=>{
        console.log("El usuario no se creo por", e)
        alert("Se produjo un error al crear el Usuario")
      }

    })
  }

}
