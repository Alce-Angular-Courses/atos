import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'ato-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  aUsuarios: Array<Usuario>;
  constructor(public us: UsuariosService) { }

  ngOnInit(): void {
    this.us.readAll().subscribe(
      resp => this.aUsuarios = resp
    )

  }

  onAdd(nuevo: Usuario): void {
    this.us.create(nuevo).subscribe(
      resp => {
        this.aUsuarios.push(resp);
        console.log(this.aUsuarios);
      }
    );
  }

  onBorrar(id: string | any): void {
    this.us.delete(id).subscribe(
      resp => {
        this.aUsuarios = this.aUsuarios.filter(
        // tslint:disable-next-line: triple-equals
        item => item.id != id
        );
      }
    );
  }
}
