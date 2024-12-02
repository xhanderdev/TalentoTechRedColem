import { Component } from '@angular/core';
import {
  EmprendimientoService,
  Emprendimiento,
} from '../../../services/emprendimiento.service';

@Component({
  selector: 'app-lista-emp',
  standalone: false,
  templateUrl: './lista-emp.component.html',
  styleUrls: ['./lista-emp.component.css'],
})
export class ListaEmpComponent {
  emprendimientos: Emprendimiento[] = [];

  constructor(private emprendimientoService: EmprendimientoService) {}

  // Método para inicializar los datos al cargar el componente
  ngOnInit(): void {
    this.emprendimientoService.getEmprendimientos().subscribe((data) => {
      this.emprendimientos = data;
      console.log('Emprendimientos cargados:', this.emprendimientos);
    });
  }
}
