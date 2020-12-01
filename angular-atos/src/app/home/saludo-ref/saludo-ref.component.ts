import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ato-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.css']
})
export class SaludoRefComponent implements OnInit {
  @ViewChild('usuario', {static: true}) refUsuario: ElementRef;
  constructor() {
    console.log('Ref en el constructor:', this.refUsuario);
  }

  ngOnInit(): void {
    console.log('Ref en el onInit:', this.refUsuario);
    const elemnt = this.refUsuario.nativeElement;
    elemnt.value = 'Pepe';
  }

}
