import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `,
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  values = ''
  onKey(event: any) {
    this.values += event.target.value + ' |'
  }

}
