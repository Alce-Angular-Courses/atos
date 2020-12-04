import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor() { }

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
}
