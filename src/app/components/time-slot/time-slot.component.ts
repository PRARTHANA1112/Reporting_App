import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  time :any = 0;
  //mins : number = 0;
  //type: string = 'AM';
  

  clickMethod(){
    alert(this.time);
  }
 
}
