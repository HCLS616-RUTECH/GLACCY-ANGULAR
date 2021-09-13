import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNocontentComponent } from './page-nocontent.component';

describe('NocontentPageComponent', () => {
  let component: PageNocontentComponent;
  let fixture: ComponentFixture<PageNocontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNocontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNocontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
