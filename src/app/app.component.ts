import { Component } from '@angular/core';
import { Circle } from './objects/circle';
import { Text } from './objects/text';
import { Rect } from './objects/rect';
import { SvgObject } from './objects/object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private objects: SvgObject[] = [];
  private selectedObject: SvgObject;
  private json = '';
  private error = false;

  public addCircle() {
    const circle = new Circle();
    this.objects.push(circle);
  }

  public addRect() {
    const rect = new Rect();
    this.objects.push(rect);
  }

  public addText() {
    const text = new Text();
    this.objects.push(text);
  }

  public onSelectObject(object: SvgObject) {

    this.objects.forEach(obj => obj.active = false);
    this.selectedObject = object;
    this.selectedObject.active = true;
  }

  public save() {
    this.json = JSON.stringify(this.objects);
  }

  public load() {

    this.error = false;

    try {
      this.objects = JSON.parse(this.json);
    } catch (error) {
      this.error = true;
    }

  }
}
