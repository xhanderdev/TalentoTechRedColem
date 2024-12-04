import { Injectable } from '@angular/core';
//se importo HttpCliente
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';//importa observable

import { PerfilComponent } from './../pages/usuario/perfil/perfil.component';

export interface Usuario{
  idUsuario: number;
  nombre: string;
  apellido: string;
  correoElectronico: string;
  telefono: string;
  password: string;
  direccion: string;
  fotoPerfil: string;
  biografia: string;
  sitioWeb: string;
  activo: boolean;
  ciudad: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
// url para acceder a la informacion de usuario
  private apiUrl = "http://localhost:8080/api/usuarios";

  constructor(private http: HttpClient) { }
    //Ver usuario
    getUsuario():Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.apiUrl)
   }
    //Crear usuario
    createUsuario(usuario: Omit<Usuario, 'idUsuario'>):Observable<Usuario>{
      return this.http.post<Usuario>(this.apiUrl, usuario)
   }

   updateUsuario(usuario: Omit<Usuario, 'idUsuario'> & { idUsuario: number }): Observable<Usuario> {
    // PUT para actualizar el usuario por id
    return this.http.put<Usuario>(`${this.apiUrl}/${usuario.idUsuario}`, usuario);
  }

  // Eliminar usuario pendiente 
    deleteUsuario(idUsuario: number):Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${idUsuario}`);
   }


}

