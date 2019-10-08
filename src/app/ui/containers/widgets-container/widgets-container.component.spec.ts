import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsContainerComponent } from './widgets-container.component';

describe('WidgetsContainerComponent', () => {
  let component: WidgetsContainerComponent;
  let fixture: ComponentFixture<WidgetsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
