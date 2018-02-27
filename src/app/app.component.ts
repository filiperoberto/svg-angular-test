import { Component } from '@angular/core';
import { Circle } from './objects/circle';
import { Rect } from './objects/rect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private objects: Object[] = [];
  private selectedObject: Object;

  public addCircle() {
    const circle = new Circle();
    this.objects.push(circle);
  }

  public addRect() {
    const rect = new Rect();
    this.objects.push(rect);
  }

  public onSelectObject(object) {
    this.selectedObject = object;
  }
}
