import { Component, Input } from '@angular/core';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input() isSelected: boolean;

  constructor() { }

  onClick() {
    this.isSelected = !this.isSelected;
  }
}
