import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';


const prime = [
  ButtonModule,
  PanelModule,
  ToolbarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    prime
  ],
  exports: [prime]
})
export class PrimeModule { }
