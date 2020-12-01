import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ato-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  logo: any;

  constructor() { }

  ngOnInit(): void {
    this.logo = {
      img:  '../../../assets/logo.svg',
      alt: 'Logotipo de Angular'
    };
  }

}
