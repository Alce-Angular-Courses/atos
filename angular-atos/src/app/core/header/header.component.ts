import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'ato-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titulo: string;
  constructor() {
   }

  ngOnInit(): void {
    this.titulo = 'Angular Atos';
  }

}
