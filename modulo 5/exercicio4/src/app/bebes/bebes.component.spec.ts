import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebesComponent } from './bebes.component';

describe('BebesComponent', () => {
  let component: BebesComponent;
  let fixture: ComponentFixture<BebesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BebesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
