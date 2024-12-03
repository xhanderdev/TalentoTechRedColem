import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Emprendimiento {
  idEmprendimiento: number;
  nombre: string;
  descripcion: string;
  urlSitioWeb: string;
  emprendimiento: Emprendimiento
}
@Injectable({
  providedIn: 'root',
})
export class EmprendimientoService {
  private apiUrl = 'http://localhost:8080/api/emprendimiento'; // Cambia a tu endpoint real

  constructor(private http: HttpClient) {}

  // Obtener todas las categorías de emprendimientos
  getEmprendimientos(): Observable<Emprendimiento[]> {
    return this.http.get<Emprendimiento[]>(this.apiUrl);
  }

  // Crear una nueva relación emprendimiento-categoría
  createEmprendimiento(
    Emprendimiento: Emprendimiento
  ): Observable<Emprendimiento> {
    return this.http.post<Emprendimiento>(this.apiUrl, Emprendimiento);
  }

  // Actualizar una relación emprendimiento-categoría
  updateEmprendimiento(
    id: number,
    Emprendimiento: Emprendimiento
  ): Observable<Emprendimiento> {
    return this.http.put<Emprendimiento>(
      `${this.apiUrl}/${id}`,
      Emprendimiento
    );
  }

  // Eliminar una relación emprendimiento-categoría
  deleteEmprendimiento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
