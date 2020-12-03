import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'ato-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Usuario;
  @Output() borrar: EventEmitter<string | number>;

  constructor() {
    this.borrar = new EventEmitter();
   }

  ngOnInit(): void {
  }

  sendBorrar(): void {
    this.borrar.next(this.item.id);
  }

}
