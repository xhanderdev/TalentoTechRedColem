import { Injectable } from '@angular/core';
//se importo HttpCliente
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';//importa observable

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
    createUsuario(usuario: Usuario):Observable<Usuario>{
      return this.http.post<Usuario>(this.apiUrl, usuario)
   }

     // Modificar usuario pendiente para uso
    updateUsuario(id: number, usuario: Usuario): Observable<Usuario> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.put<Usuario>(url, usuario);
  }

  // Eliminar usuario pendiente 
    deleteUsuario(id: number): Observable<void> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete<void>(url);
  }

  // Consultar usuario por ID pendiente 
    getUsuarioById(id: number): Observable<Usuario> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Usuario>(url);
  }

}

