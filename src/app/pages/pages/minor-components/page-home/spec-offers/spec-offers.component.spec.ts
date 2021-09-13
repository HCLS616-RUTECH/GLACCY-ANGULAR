import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecOffersComponent } from './spec-offers.component';

describe('SpecOffersComponent', () => {
  let component: SpecOffersComponent;
  let fixture: ComponentFixture<SpecOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
