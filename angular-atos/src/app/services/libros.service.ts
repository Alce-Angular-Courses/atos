import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';

const LIBROS: Array<Libro> = [
      new Libro(1, 'Angular', 'Pepe Perez'),
      new Libro(2, 'Angular Avanzado', 'Rosa Perez'),
      new Libro(3, 'Angular para torpes', 'Ernesto Perez'),
    ];

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  url: string;
  constructor(public http: HttpClient) {
    this.url = environment.urlLibros;
   }

  buscarMock(clave: string): Array<Libro> {
    return LIBROS;
  }

  buscarMockAsinc(clave: string): Promise<Array<Libro>> {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        const n = Math.random();
        if (n > 0.5 ) {
          resolve(LIBROS);
        } else {
          reject(new Error(`Error num. ${n}`) );
        }
      }, 1000);
    });

  }

  buscarMockRx(clave: string): Observable<Array<Libro>> {
    return new Observable( (subject) => {
      setTimeout(() => {
        subject.next(LIBROS);
      }, 1000);
    });
  }

  buscarGoogle(clave: string): Promise<Array<Libro>> {
    return this.http.get(this.url + clave).toPromise()
    .then(
      (resp: any) => { return resp.items.map(
        item => {return new Libro(
          item.id, item.volumeInfo.title, item.volumeInfo.authors
        ); }
      ); }
    );
  }

  buscarGoogleRx(clave: string): Observable<Array<Libro>> {
    return this.http.get(this.url + clave)
    .pipe( map( (resp: any) => resp.items ))
    .pipe( map( resp => resp.map(
      item => {return new Libro(
        item.id, item.volumeInfo.title, item.volumeInfo.authors
      ); }
    )));
  }
}
