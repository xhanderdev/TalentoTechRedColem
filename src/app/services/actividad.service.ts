import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Actividad {
  idActividad: number;
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
  descripcion: string;
  estado: string;
  urlImagen: string;
  urlVideo: string;
}
@Injectable({
  providedIn: 'root',
})
export class ActividadService {
  private apiUrl = 'http://localhost:8080/api/actividades';

  constructor(private http: HttpClient) {}

  // Obtener todas las actividades
  getActividades(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(this.apiUrl);
  }

  // Crear una nueva actividad
  createActividad(actividad: Actividad): Observable<Actividad> {
    return this.http.post<Actividad>(this.apiUrl, actividad);
  }
}