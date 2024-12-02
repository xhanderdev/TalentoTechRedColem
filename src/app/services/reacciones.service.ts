import { Injectable } from '@angular/core';

export interface reacciones{
  idReacciones: number;
  tipo: string;
  idUsuario: number;
  idComentarios: number;
  idEmprendimiento: number;
  idActividad: number;  
}

@Injectable({
  providedIn: 'root'
})
export class ReaccionesService {

  constructor() { }
}
