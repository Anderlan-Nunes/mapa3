import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';


const prime = [
  ButtonModule,
  PanelModule,
  ToolbarModule,
  SidebarModule
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
