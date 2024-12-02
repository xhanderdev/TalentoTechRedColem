import { Injectable } from '@angular/core';


export interface Departamento {
  idDepartamento: number;
  nombreDepartamento: string;
}

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor() { }
}
