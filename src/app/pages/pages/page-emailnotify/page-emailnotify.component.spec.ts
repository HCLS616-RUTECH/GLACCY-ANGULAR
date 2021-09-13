import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmailnotifyComponent } from './page-emailnotify.component';

describe('PageEmailnotifyComponent', () => {
  let component: PageEmailnotifyComponent;
  let fixture: ComponentFixture<PageEmailnotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEmailnotifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmailnotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
