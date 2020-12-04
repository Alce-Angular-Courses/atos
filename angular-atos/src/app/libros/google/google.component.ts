import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ato-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {
  clave: string;
  aLibros: Array<Libro>;
  mensaje: string;
  url: string;
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.aLibros = [];
    this.url = environment.urlLibros;
  }

  onBuscar(): void {
    if (!this.clave) {
      return;
    }
    this.http.get(this.url + this.clave).toPromise().then(
      (resp: any) => {
        this.aLibros = resp.items.map(
          item => {return new Libro(
            item.id, item.volumeInfo.title, item.volumeInfo.authors
          ); }
        );
      }
    );
    this.clave = '';
  }

  onBuscarRx(): void {
    if (!this.clave) {
      return;
    }
    this.http.get(this.url + this.clave).subscribe(
      (resp: any) => {
        this.aLibros = resp.items.map(
          item => {return new Libro(
            item.id, item.volumeInfo.title, item.volumeInfo.authors
          ); }
        );
      }
    );

    // this.clave = '';
  }
}
