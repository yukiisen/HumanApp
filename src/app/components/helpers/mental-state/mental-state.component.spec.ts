import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalStateComponent } from './mental-state.component';

describe('MentalStateComponent', () => {
  let component: MentalStateComponent;
  let fixture: ComponentFixture<MentalStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentalStateComponent]
    });
    fixture = TestBed.createComponent(MentalStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
