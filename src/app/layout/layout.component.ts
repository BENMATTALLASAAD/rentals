import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  isMenuOpen = false;

  onMenuToggle(isOpen: boolean): void {
    this.isMenuOpen = isOpen;
  }
}
