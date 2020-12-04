import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'ato-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit, OnDestroy {
  clave: string;
  aLibros: Array<Libro>;
  aLibros$: Observable<Array<Libro>>;
  aLibrosSubscription: Subscription;
  mensaje: string;
  buscando: boolean;
  constructor(public ls: LibrosService) { }

  ngOnInit(): void {
    this.clave = '';
    this.mensaje = '';
    this.aLibros = [];
    this.buscando = false;
  }

  ngOnDestroy(): void {
    this.aLibrosSubscription.unsubscribe();
  }

  onBuscar(): void {
    if (!this.clave) {
      return;
    }
    this.aLibros = this.ls.buscarMock(this.clave);
    this.clave = '';
  }

  onBuscarAsinc(): void {
    if (!this.clave) {
      return;
    }
    this.ls.buscarMockAsinc(this.clave).then(
      resp => {
        this.mensaje = '';
        this.aLibros = resp;
      }
    ).catch(
      err => this.mensaje = err.message
    );
    this.mensaje = `buscando...${this.clave}`;
  }

  onBuscarRx(): void {
    if (!this.clave) {
      return;
    }
    this.buscando = true;
    this.aLibros$ = this.ls.buscarMockRx(this.clave);
    this.aLibrosSubscription = this.aLibros$.subscribe(
      resp => {
        this.aLibros = resp;
        this.buscando = false;
      }
    );
  }
}
