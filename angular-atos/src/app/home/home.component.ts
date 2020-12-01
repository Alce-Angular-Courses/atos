import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ato-home',
  template: `
    <ato-saludo></ato-saludo>
    <ato-saludo-ref></ato-saludo-ref>
    <ato-saludo-rx></ato-saludo-rx>
  `,
  styles: [
    'div {color: brown}'
  ]
})
export class HomeComponent implements OnInit {
  titulo: string;
  constructor() { }

  ngOnInit(): void {
    this.titulo = 'Home';
  }

}
