import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAppListingComponent } from './individual-app-listing.component';

describe('IndividualAppListingComponent', () => {
  let component: IndividualAppListingComponent;
  let fixture: ComponentFixture<IndividualAppListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualAppListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualAppListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
