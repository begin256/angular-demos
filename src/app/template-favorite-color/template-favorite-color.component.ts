import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-favorite-color',
  template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
  `,
  styleUrls: ['./template-favorite-color.component.css']
})
export class TemplateFavoriteColorComponent implements OnInit {
  favoriteColor=''
  constructor() { }

  ngOnInit() {
  }

}
