import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorfersComponent } from './morfers.component';

describe('MorfersComponent', () => {
  let component: MorfersComponent;
  let fixture: ComponentFixture<MorfersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MorfersComponent]
    });
    fixture = TestBed.createComponent(MorfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
