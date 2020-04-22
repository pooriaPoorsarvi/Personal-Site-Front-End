import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualBlogSnippetComponent } from './individual-blog-snippet.component';

describe('IndividualBlogSnippetComponent', () => {
  let component: IndividualBlogSnippetComponent;
  let fixture: ComponentFixture<IndividualBlogSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualBlogSnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualBlogSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
