import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstapComponent } from './firstap.component';

describe('FirstapComponent', () => {
  let component: FirstapComponent;
  let fixture: ComponentFixture<FirstapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
