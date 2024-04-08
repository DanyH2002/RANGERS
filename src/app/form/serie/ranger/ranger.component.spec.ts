import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangerComponent } from './ranger.component';

describe('RangerComponent', () => {
  let component: RangerComponent;
  let fixture: ComponentFixture<RangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangerComponent]
    });
    fixture = TestBed.createComponent(RangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
