import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleIcecreamComponent } from './double-icecream.component';

describe('DoubleIcecreamComponent', () => {
  let component: DoubleIcecreamComponent;
  let fixture: ComponentFixture<DoubleIcecreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleIcecreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleIcecreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
