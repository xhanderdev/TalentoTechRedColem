import { Component } from '@angular/core';
//Se importa el servicio de usuario
import { UsuarioService, Usuario } from '../../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-usuario',
  standalone: false,

  templateUrl: './listado-usuario.component.html',
  styleUrl: './listado-usuario.component.css'
})
export class ListadoUsuarioComponent {
  usuario: Usuario[]=[];
  selectedUsuario: Usuario = {} as  Usuario;
  isModalOpen = false; // motrar y ocultar modal

  constructor(private usuarioservicio: UsuarioService, private router: Router ){}
  //inicia el componente
  ngOnInit():void{
    this.usuarioservicio.getUsuario().subscribe((data) =>(this.usuario=data));
    console.log(this.usuario);
  }

  openModal(usu: Usuario): void {
    this.selectedUsuario = {...usu}; //usuario selecionado
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false; // Oculta el modal
  }

  updateUsuario(): void {
    // Verifica que selectedUsuario tenga datos válidos antes de proceder
    if (!this.selectedUsuario || !this.selectedUsuario.idUsuario) {
      alert('Por favor, seleccione un usuario válido para modificar.');
      return;
    }
  
    this.usuarioservicio.updateUsuario(this.selectedUsuario).subscribe(
      () => {
        // Encuentra el índice del usuario a actualizar
        const index = this.usuario.findIndex((usu) => usu.idUsuario === this.selectedUsuario.idUsuario);
        if (index !== -1) {
          // Actualiza el usuario en la lista local
          this.usuario[index] = { ...this.selectedUsuario };
        }
  
        // Notifica al usuario del éxito
        alert('Usuario modificado con éxito');
  
        // Cierra el modal al finalizar
        this.closeModal();
      },
      (error) => {
        // Manejo de errores más claro
        console.error('Error al modificar el usuario:', error);
        alert('Hubo un error al modificar el usuario. Por favor, inténtelo de nuevo más tarde.');
      }
    );
  }
  



  deleteUsuario(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuarioservicio.deleteUsuario(id).subscribe(
        () => {
          // Filtra correctamente usando el ID del usuario
          this.usuario = this.usuario.filter((usu) => usu.idUsuario !== id);// Elimina el usuario de la lista
          alert('Usuario eliminado con éxito');
          this.router.navigate(['/listaUsuarios']);  // Redirige después de la eliminación
        },
        (error) => {
          console.error('Error al eliminar el usuario:', error);
          alert('Hubo un error al eliminar el usuario');
          this.router.navigate(['/listaUsuarios']);
        }
      );
    }
  }
  



}
