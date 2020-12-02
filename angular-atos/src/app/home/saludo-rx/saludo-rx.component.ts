import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ato-saludo-rx',
  templateUrl: './saludo-rx.component.html',
  styleUrls: ['./saludo-rx.component.css']
})
export class SaludoRxComponent implements OnInit {
  mensaje: string;
  usuario: FormControl;
  constructor() { }

  ngOnInit(): void {
      this.mensaje = 'Dime tu nombre';
      this.usuario = new FormControl();
      this.usuario.setValue('Pepe')
  }

  onBorrar(ev: Event): void {
    console.log(this.usuario);
    this.usuario.reset();
  }

}
