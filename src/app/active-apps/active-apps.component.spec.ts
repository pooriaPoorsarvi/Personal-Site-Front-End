import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAppsComponent } from './active-apps.component';

describe('ActiveAppsComponent', () => {
  let component: ActiveAppsComponent;
  let fixture: ComponentFixture<ActiveAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
