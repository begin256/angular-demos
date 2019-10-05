import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
  Favorite Color:<input type="text" [formControl]="favoriteColorControl">
  `,
  styleUrls: ['./reactive-favorite-color.component.css']
})
export class ReactiveFavoriteColorComponent  {
  favoriteColorControl = new FormControl('')
}
