import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalSectionsComponent } from './additional-sections.component';

describe('AdditionalSectionsComponent', () => {
  let component: AdditionalSectionsComponent;
  let fixture: ComponentFixture<AdditionalSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
