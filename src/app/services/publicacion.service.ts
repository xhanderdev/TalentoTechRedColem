import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Publicacion {
  idPublicacion: number;
  titulo: string;
  contenido: string;
  fechaCreacion: Date;
  urlImagen: string;
  urlVideo: string;
}
@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  private apiUrl = 'http://localhost:8080/api/publicacion'; // URL del backend

  constructor(private http: HttpClient) {}

  // Obtener todas las publicaciones
  getPublicaciones(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(this.apiUrl);
  }

  // Crear una nueva publicación
  createPublicacion(publicacion: Publicacion): Observable<Publicacion> {
    return this.http.post<Publicacion>(this.apiUrl, publicacion);
  }

  // Actualizar una publicación existente
  updatePublicacion(publicacion: Publicacion): Observable<Publicacion> {
    return this.http.put<Publicacion>(
      `${this.apiUrl}/${publicacion.idPublicacion}`,
      publicacion
    );
  }

  // Eliminar una publicación
  deletePublicacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
