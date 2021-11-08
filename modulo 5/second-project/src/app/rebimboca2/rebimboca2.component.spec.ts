import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rebimboca2Component } from './rebimboca2.component';

describe('Rebimboca2Component', () => {
  let component: Rebimboca2Component;
  let fixture: ComponentFixture<Rebimboca2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rebimboca2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rebimboca2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
