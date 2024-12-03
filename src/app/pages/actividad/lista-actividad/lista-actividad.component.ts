import { Component, OnInit } from '@angular/core';
import {
  ActividadService,
  Actividad,
} from '../../../services/actividad.service';

@Component({
  selector: 'app-lista-actividad',
  templateUrl: './lista-actividad.component.html',
  standalone: false,
  styleUrls: ['./lista-actividad.component.css'],
})
export class ListaActividadComponent implements OnInit {
  actividades: Actividad[] = [];

  constructor(private actividadService: ActividadService) {}

  ngOnInit(): void {
    this.actividadService.getActividades().subscribe((data) => {
      this.actividades = data;
    });
  }
}
