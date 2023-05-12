import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDetailsComponent } from './age-details.component';

describe('AgeDetailsComponent', () => {
  let component: AgeDetailsComponent;
  let fixture: ComponentFixture<AgeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
