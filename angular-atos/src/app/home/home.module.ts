import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaludoRefComponent } from './saludo-ref/saludo-ref.component';
import { SaludoRxComponent } from './saludo-rx/saludo-rx.component';

@NgModule({
  declarations: [
    HomeComponent,
    SaludoComponent,
    SaludoRefComponent,
    SaludoRxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
