import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'ato-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  tarea: Tarea;
  aTareas: Array<Tarea>;
  store: string;

  constructor(public st: StoreService) { }

  ngOnInit(): void {
    this.store = 'tareas';
    this.aTareas = this.st.getTareas();
    /* this.aTareas = localStorage.getItem(this.store)
      ? JSON.parse(localStorage.getItem(this.store)) : []; */
    this.tarea = new Tarea();
  }

  add(): void {
    if (!this.tarea.nombre) {
      return;
    }
    this.aTareas.push(this.tarea);
    this.tarea = new Tarea();
    this.save();
  }

  completed(): void {
    this.save();
  }

  borrar(i: number): void {
    this.aTareas.splice(i, 1);
    this.save();
  }
  private save(): void {
    this.st.setTareas(this.aTareas);
    /* localStorage.setItem(this.store, JSON.stringify(this.aTareas)); */
  }

}
