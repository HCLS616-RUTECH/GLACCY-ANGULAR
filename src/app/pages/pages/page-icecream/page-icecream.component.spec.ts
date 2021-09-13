import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIcecreamComponent } from './page-icecream.component';

describe('IcecreamPageComponent', () => {
  let component: PageIcecreamComponent;
  let fixture: ComponentFixture<PageIcecreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageIcecreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIcecreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
