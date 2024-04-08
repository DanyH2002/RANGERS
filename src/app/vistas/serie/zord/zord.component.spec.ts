import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZordComponent } from './zord.component';

describe('ZordComponent', () => {
  let component: ZordComponent;
  let fixture: ComponentFixture<ZordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZordComponent]
    });
    fixture = TestBed.createComponent(ZordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
