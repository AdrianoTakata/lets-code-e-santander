import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamastorComponent } from './adamastor.component';

describe('AdamastorComponent', () => {
  let component: AdamastorComponent;
  let fixture: ComponentFixture<AdamastorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdamastorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdamastorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
