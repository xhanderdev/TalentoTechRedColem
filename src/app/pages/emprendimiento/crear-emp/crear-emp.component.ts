import { Component } from '@angular/core';
import {
  EmprendimientoService,
  Emprendimiento,
} from '../../../services/emprendimiento.service';

@Component({
  selector: 'app-crear-emp',
  standalone: false,
  
  templateUrl: './crear-emp.component.html',
  styleUrl: './crear-emp.component.css'
})
export class CrearEmpComponent {
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
