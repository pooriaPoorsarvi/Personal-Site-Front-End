import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralProjectComponent } from './general-project.component';

describe('GeneralProjectComponent', () => {
  let component: GeneralProjectComponent;
  let fixture: ComponentFixture<GeneralProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
