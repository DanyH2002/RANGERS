import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangersComponent } from './rangers.component';

describe('RangersComponent', () => {
  let component: RangersComponent;
  let fixture: ComponentFixture<RangersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangersComponent]
    });
    fixture = TestBed.createComponent(RangersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
