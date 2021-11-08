import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebimbocaComponent } from './rebimboca.component';

describe('RebimbocaComponent', () => {
  let component: RebimbocaComponent;
  let fixture: ComponentFixture<RebimbocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RebimbocaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RebimbocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
