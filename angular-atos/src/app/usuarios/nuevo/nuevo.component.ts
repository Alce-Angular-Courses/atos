import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'ato-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  usuario: Usuario;
  @Output() add: EventEmitter<Usuario>;
  constructor() {
    this.add = new EventEmitter();
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  sendAdd(): void {
    if (!this.usuario.nombre) {
      return;
    }
    this.add.next(this.usuario);
    this.usuario = new Usuario();
  }

}
