import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable( {
  providedIn: 'root'
})
export class StoreService {
  storeTareas: string;

  constructor() {
    this.storeTareas = 'tareas';
  }

  getTareas(): Array<Tarea> {
    const data: Array<Tarea> = localStorage.getItem(this.storeTareas) ?
      JSON.parse(localStorage.getItem(this.storeTareas)) : [];
    return  data;
  }

  setTareas(tareas: Array<Tarea>): void {
    localStorage.setItem(this.storeTareas,
      JSON.stringify(tareas));
  }

  removeTareas(): void {
    localStorage.removeItem(this.storeTareas);
  }

}
