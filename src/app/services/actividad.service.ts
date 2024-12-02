import { Injectable } from '@angular/core';

export interface Actividad {
  idActividad: number;
  nombre: string;
  //fechaInicio: Date;
  //fechaFin: Date;
  descripcion: string;
  estado: string;
  urlImg: string;
  urlVideo: string
}

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor() { }
}
