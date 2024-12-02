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
  //ultimoAcceso: Date;
  //fechaCreacion: Date;
  //fechaModificacion: Date;
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


}

