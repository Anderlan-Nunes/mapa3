import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
// import { PanelModule } from 'primeng/panel';


const prime = [
  ButtonModule,
  // PanelModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // prime
  ],
  // exports: [prime]
})
export class PrimeModule { }
