import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DrawAreaComponent } from './draw-area/draw-area.component';
import { ElementListComponent } from './element-list/element-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DrawAreaComponent,
    ElementListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
