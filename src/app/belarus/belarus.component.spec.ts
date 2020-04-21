import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelarusComponent } from './belarus.component';

describe('BelarusComponent', () => {
  let component: BelarusComponent;
  let fixture: ComponentFixture<BelarusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelarusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelarusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
