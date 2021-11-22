import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruburuComponent } from './caruburu.component';

describe('CaruburuComponent', () => {
  let component: CaruburuComponent;
  let fixture: ComponentFixture<CaruburuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaruburuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruburuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
