import { Component, OnInit, ViewChild } from '@angular/core';
import { Alumno, Curso, Turno } from 'src/app/models/alumno';
import { CURSOS, TURNOS } from 'src/app/models/cursos.data';

@Component({
  selector: 'ato-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  aTurnos: Array<Turno>;
  aCursos: Array<Curso>;
  alumno: Alumno;
  @ViewChild('formCurso', {static: true}) form: any;

  constructor() { }

  ngOnInit(): void {
    this.aTurnos = TURNOS;
    this.aCursos = CURSOS;
    this.alumno = new Alumno();
    console.log(this.form);
  }

}
