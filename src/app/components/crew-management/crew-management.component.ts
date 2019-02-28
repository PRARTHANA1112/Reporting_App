import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew-management',
  templateUrl: './crew-management.component.html',
  styleUrls: ['./crew-management.component.css',
          './../../../../node_modules/font-awesome/css/font-awesome.css']
})
export class CrewManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'app';
  
  movingOffset = { x: 0, y: 0 };
  endOffset = { x: 0, y: 0 };
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };
  onStart(event) {
    console.log('started output:', event);
  }
  onStop(event) {
    console.log('stopped output:', event);
  }
  onMoving(event) {
    this.movingOffset.x = event.x;
    this.movingOffset.y = event.y;
  }
  onMoveEnd(event) {
    debugger;
    this.endOffset.x = event.x;
    this.endOffset.y = event.y;
  }
  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }
}
