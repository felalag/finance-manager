import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorNotificationModalComponent} from './error-notification-modal.component';

describe('ErrorNotificationModalComponent', () => {
  let component: ErrorNotificationModalComponent;
  let fixture: ComponentFixture<ErrorNotificationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorNotificationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
