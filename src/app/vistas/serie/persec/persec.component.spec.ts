import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersecComponent } from './persec.component';

describe('PersecComponent', () => {
  let component: PersecComponent;
  let fixture: ComponentFixture<PersecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersecComponent]
    });
    fixture = TestBed.createComponent(PersecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
