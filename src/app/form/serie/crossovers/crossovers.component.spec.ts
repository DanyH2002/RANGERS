import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossoversComponent } from './crossovers.component';

describe('CrossoversComponent', () => {
  let component: CrossoversComponent;
  let fixture: ComponentFixture<CrossoversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrossoversComponent]
    });
    fixture = TestBed.createComponent(CrossoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
