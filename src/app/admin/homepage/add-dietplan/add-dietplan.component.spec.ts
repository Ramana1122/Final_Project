import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDietplanComponent } from './add-dietplan.component';

describe('AddDietplanComponent', () => {
  let component: AddDietplanComponent;
  let fixture: ComponentFixture<AddDietplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDietplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDietplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
