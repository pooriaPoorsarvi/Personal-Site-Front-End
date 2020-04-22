import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-individual-blog-snippet',
  templateUrl: './individual-blog-snippet.component.html',
  styleUrls: ['./individual-blog-snippet.component.scss']
})
export class IndividualBlogSnippetComponent implements OnInit {

  @Input() image_src: string;

  constructor() { }

  ngOnInit(): void {
  }
}
