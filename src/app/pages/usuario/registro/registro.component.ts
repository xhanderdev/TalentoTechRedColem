import { Component } from '@angular/core';
//Se importa el servicio de usuario
import { UsuarioService, Usuario } from '../../../services/usuario.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-registro',
  standalone: false,

  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuario: Omit<Usuario, 'idUsuario'> = {// se corrigue lo de id -> por que es auto incrementado
    nombre: '',
    apellido: '',
    correoElectronico: '',
    telefono: '',
    password: '',
    direccion: '',
    fotoPerfil: '',
    biografia: '',
    sitioWeb: '',
    activo: true, // Valor por defecto
    ciudad: ''
  };

  constructor(private usurioservicio: UsuarioService){}

  onSubmit():void{
    this.usurioservicio.createUsuario(this.usuario).subscribe({
      next:(result) => {
        console.log("Usuario: ", this.usuario)
        console.log("Result: ", result)
        alert('Usuario creado con Exito!!!')
      }, error:(e)=>{
        console.log("Error al crear usuario:", e)
        alert("Ocurrió un error al registrar el usuario")
      }

    })
  }

}
