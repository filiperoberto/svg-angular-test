import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { SvgObject } from '../objects/object';

@Component({
  selector: 'app-draw-area',
  templateUrl: './draw-area.component.html',
  styleUrls: ['./draw-area.component.css']
})
export class DrawAreaComponent implements OnInit {

  @Input() objects;
  @Output() select = new EventEmitter<SvgObject>();

  private selectedObject;
  public moving = false;
  private position = {
    x: 0,
    y: 0
  };

  constructor() { }

  ngOnInit() {
  }

  selectObject(object: SvgObject) {
    this.select.emit(object);
  }

  onCircleMouseDown(object: SvgObject) {
    this.moving = true;
    this.selectedObject = object;
  }

  onMouseDown(e: MouseEvent) {
    this.position.x = e.pageX - this.selectedObject.x;
    this.position.y = e.pageY - this.selectedObject.y;
  }

  onMouseUp(e) {
    this.moving = false;
  }

  onMouseMove(e) {
    if (this.moving) {
      this.selectedObject.x = e.pageX - this.position.x;
      this.selectedObject.y = e.pageY - this.position.y;
    }
  }
}
