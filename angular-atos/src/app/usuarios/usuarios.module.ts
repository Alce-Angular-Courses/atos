import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsuariosComponent, NuevoComponent, ItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
