import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'ato-by-service',
  templateUrl: './by-service.component.html',
  styleUrls: ['./by-service.component.css']
})
export class ByServiceComponent implements OnInit {
  clave: string;
  aLibros: Array<Libro>;
  mensaje: string;
  
  constructor(public ls: LibrosService) { }

  ngOnInit(): void {
    this.aLibros = [];
  }

  onBuscar(): void {
    if (!this.clave) {
      return;
    }
    this.ls.buscarGoogle(this.clave).then(
      resp => this.aLibros = resp
    ).catch(
      err => this.mensaje = err.message ? err.message : err
    );
    this.clave = '';
  }

  onBuscarRx(): void {
    if (!this.clave) {
      return;
    }
    this.ls.buscarGoogleRx(this.clave).subscribe(
      resp => this.aLibros = resp
    );
    this.clave = '';
  }
}
