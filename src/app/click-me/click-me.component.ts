import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}} 
    <h4>myClick is an event on the custom ClickDirective:</h4>
    <button (myClick)="clickMessagee=$event" clickable>click with 
    myClick</button>
    {{clickMessagee}} 
    <input [value]="currentItem.name" (input)="currentItem.name=$event.target.value"
    (keyup)="onKey($event)">
    without NgModel {{currentItem.name}}
    <br>{{values}}
  `,
})
export class ClickMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clickMessage = ''
  onClickMe() {
    this.clickMessage = 'You are my hero！'
  }
  clickMessagee = ''
  currentItem = {}
  values = ''
  onKey(event: any) {
    this.values += event.target.value + ' |'
  }

}
