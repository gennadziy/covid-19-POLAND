import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Poland1Component } from './poland1.component';

describe('Poland1Component', () => {
  let component: Poland1Component;
  let fixture: ComponentFixture<Poland1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poland1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poland1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
