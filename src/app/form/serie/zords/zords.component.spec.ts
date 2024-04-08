import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZordsComponent } from './zords.component';

describe('ZordsComponent', () => {
  let component: ZordsComponent;
  let fixture: ComponentFixture<ZordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZordsComponent]
    });
    fixture = TestBed.createComponent(ZordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
