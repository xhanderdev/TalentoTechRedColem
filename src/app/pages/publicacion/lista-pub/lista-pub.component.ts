import { Component } from '@angular/core';
import {
  PublicacionService,
  Publicacion,
} from '../../../services/publicacion.service';

@Component({
  selector: 'app-lista-pub.component',
  standalone: false,
  templateUrl: './lista-pub.component.html',
  styleUrls: ['./lista-pub.component.component.css'],
})
export class ListaPubComponent {
  publicaciones: Publicacion[] = [];

  constructor(private publicacionService: PublicacionService) {}

  // Método para inicializar los datos al cargar el componente
  ngOnInit(): void {
    this.publicacionService.getPublicaciones().subscribe((data) => {
      this.publicaciones = data;
      console.log('Publicaciones cargadas:', this.publicaciones);
    });
  }
}
