import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPostingComponent } from './app-posting.component';

describe('AppPostingComponent', () => {
  let component: AppPostingComponent;
  let fixture: ComponentFixture<AppPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
