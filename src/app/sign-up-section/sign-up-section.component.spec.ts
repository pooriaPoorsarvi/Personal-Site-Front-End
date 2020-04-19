import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpSectionComponent } from './sign-up-section.component';

describe('SignUpSectionComponent', () => {
  let component: SignUpSectionComponent;
  let fixture: ComponentFixture<SignUpSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
