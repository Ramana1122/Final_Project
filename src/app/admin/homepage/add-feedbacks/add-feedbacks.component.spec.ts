import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeedbacksComponent } from './add-feedbacks.component';

describe('AddFeedbacksComponent', () => {
  let component: AddFeedbacksComponent;
  let fixture: ComponentFixture<AddFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeedbacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
