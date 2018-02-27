import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-draw-area',
  templateUrl: './draw-area.component.html',
  styleUrls: ['./draw-area.component.css']
})
export class DrawAreaComponent implements OnInit {

  @Input() values;

  private moving = false;
  private position = {
    x: 0,
    y: 0
  };

  constructor() { }

  ngOnInit() {
  }

  onCircleMouseDown() {
    this.moving = true;
  }

  onMouseDown(e: MouseEvent) {
    this.position.x = e.pageX - this.values.x;
    this.position.y = e.pageY - this.values.y;
  }

  onMouseUp() {
    this.moving = false;
  }

  onMouseMove(e) {
    if (this.moving) {
      this.values.x = e.pageX - this.position.x;
      this.values.y = e.pageY - this.position.y;
    }
  }
}
