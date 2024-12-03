import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Conversacion {
  idConversacion: number;
  fechaCreacion: Date;
}
@Injectable({
  providedIn: 'root',
})
export class ConversacionService {
  private apiUrl = 'http://localhost:8080/api/conversacion';

  constructor(private http: HttpClient) {}

  // Obtener todas las conversaciones
  getConversaciones(): Observable<Conversacion[]> {
    return this.http.get<Conversacion[]>(this.apiUrl);
  }

  // Crear una nueva conversación
  createConversacion(conversacion: Conversacion): Observable<Conversacion> {
    return this.http.post<Conversacion>(this.apiUrl, conversacion);
  }
}

