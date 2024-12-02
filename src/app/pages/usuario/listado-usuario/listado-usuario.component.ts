import { Component } from '@angular/core';
//Se importa el servicio de usuario
import { UsuarioService, Usuario } from '../../../services/usuario.service';


@Component({
  selector: 'app-listado-usuario',
  standalone: false,

  templateUrl: './listado-usuario.component.html',
  styleUrl: './listado-usuario.component.css'
})
export class ListadoUsuarioComponent {
  usuario: Usuario[]=[];

  constructor(private usuarioservicio: UsuarioService ){}
  //inicia el componente
  ngOnInit():void{
    this.usuarioservicio.getUsuario().subscribe((data) =>(this.usuario=data));
    console.log(this.usuario);
  }

}
