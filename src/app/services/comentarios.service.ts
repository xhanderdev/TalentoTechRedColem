import { Injectable } from '@angular/core';

export interface Comentarios{
  idComentarios: number;
  contenidos: string;
  //fechaCreacion: Date;
  //fechaModificacion: Date;
  urlImg: string;
  urlVideo: string
}

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor() { }
}
