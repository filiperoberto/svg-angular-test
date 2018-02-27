import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { SvgObject } from '../objects/object';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent implements OnInit {

  @Input() objects;
  @Output() select = new EventEmitter<SvgObject>();

  constructor() { }

  ngOnInit() {
  }

  public onSelect(object) {
    this.select.emit(object);
  }

  public toggleVisibility(event: MouseEvent, object: SvgObject) {
    object.visible = !object.visible;
    event.stopPropagation();
  }

}
