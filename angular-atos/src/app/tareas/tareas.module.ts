import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [TareasComponent, ListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
