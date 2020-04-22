import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkDownDetailComponent } from './mark-down-detail.component';

describe('MarkDownDetailComponent', () => {
  let component: MarkDownDetailComponent;
  let fixture: ComponentFixture<MarkDownDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkDownDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkDownDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
