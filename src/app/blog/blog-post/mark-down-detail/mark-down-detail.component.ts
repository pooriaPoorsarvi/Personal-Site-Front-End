import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mark-down-detail',
  templateUrl: './mark-down-detail.component.html',
  styleUrls: ['./mark-down-detail.component.scss']
})
export class MarkDownDetailComponent implements OnInit {

  @Input() innerHTMLMarkdown: string;

  constructor() { }

  ngOnInit(): void {
  }

}
