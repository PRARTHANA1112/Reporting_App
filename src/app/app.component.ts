import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              '../../node_modules/font-awesome/css/font-awesome.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit() {
  }
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
