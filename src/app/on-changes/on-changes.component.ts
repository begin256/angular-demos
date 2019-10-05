import { Component, OnInit, SimpleChange,Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit {

  @Input() hero:Hero;
  @Input() power:string;
  constructor() { }

  ngOnInit() {
  }
changeLog=[]
  ngOnChange(changes:SimpleChange){
    for(let propName in changes){
      let chng=changes[propName]
      let cur=JSON.stringify(chng.currentValue);
      let prev=JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue=${cur},previousValue=${prev}`)
    }
  }
  onKey(event:any){
    this.changeLog=event.target.value
  }
}
