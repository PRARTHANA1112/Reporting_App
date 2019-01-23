import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit() {
  }
  movingOffset = { x: 0, y: 0 };
  endOffset = { x: 0, y: 0 };
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
}
