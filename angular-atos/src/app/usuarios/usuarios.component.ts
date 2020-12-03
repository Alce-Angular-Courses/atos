import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'ato-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  aUsuarios: Array<Usuario>;
  constructor() { }

  ngOnInit(): void {
    this.aUsuarios = [];
  }

  onAdd(nuevo: Usuario): void {
    nuevo.id = this.aUsuarios.length + 1;
    this.aUsuarios.push(nuevo);
    console.log(this.aUsuarios);
  }

  onBorrar(id: string | any): void {
    this.aUsuarios = this.aUsuarios.filter(
      // tslint:disable-next-line: triple-equals
      item => item.id != id
    );
  }
}
