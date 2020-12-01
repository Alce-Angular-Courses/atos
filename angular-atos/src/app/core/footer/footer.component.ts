import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ato-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor: string;
  hoy: Date;
  constructor() { }

  ngOnInit(): void {
    this.autor = 'Alejandro Cerezo';
    this.hoy = new Date();
  }

}
