import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ato-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  usuario: string;
  mensaje: string;
  constructor() { }

  ngOnInit(): void {
    this.mensaje = 'Dime tu nombre';
    this.usuario = 'Pepe';
  }

  onBorrar(ev: Event): void {
    console.log(ev);
    console.log(this.usuario);
    this.usuario = '';
    console.log('Borrado', this.usuario);
  }
}
