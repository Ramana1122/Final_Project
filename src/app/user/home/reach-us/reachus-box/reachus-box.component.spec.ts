import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachusBoxComponent } from './reachus-box.component';

describe('ReachusBoxComponent', () => {
  let component: ReachusBoxComponent;
  let fixture: ComponentFixture<ReachusBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReachusBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachusBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
