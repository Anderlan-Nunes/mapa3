import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarVisible: boolean = true;

  transitionOptions = {
    name: 'ease-in-out', // Nome da animação
    duration: '0.3s', // Duração da animação
  }
}
