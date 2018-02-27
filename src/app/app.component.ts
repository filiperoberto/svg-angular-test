import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coisa';

  values = {
    strokeWidth : 0,
    radius : 50,
    fillColor : '#FF7D5D',
    strokeColor : '#CD213B',
    x : 50,
    y : 50
  };
}
