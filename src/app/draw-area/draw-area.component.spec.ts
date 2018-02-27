import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawAreaComponent } from './draw-area.component';

describe('DrawAreaComponent', () => {
  let component: DrawAreaComponent;
  let fixture: ComponentFixture<DrawAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
