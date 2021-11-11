import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsHobbieComponent } from './cards-hobbie.component';

describe('CardsHobbieComponent', () => {
  let component: CardsHobbieComponent;
  let fixture: ComponentFixture<CardsHobbieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsHobbieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsHobbieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
