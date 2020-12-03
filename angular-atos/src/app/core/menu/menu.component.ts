import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ato-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: Array<any>;
  constructor() { }

  ngOnInit(): void {
  this.items = [
    {path: 'home', name: 'Home'},
    {path: 'tareas', name: 'Tareas'},
    {path: 'usuarios', name: 'Usuarios'},
    {path: 'cursos', name: 'Cursos'},
    {path: 'about', name: 'About'}
  ];
  }
}
