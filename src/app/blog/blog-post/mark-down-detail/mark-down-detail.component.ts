import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mark-down-detail',
  templateUrl: './mark-down-detail.component.html',
  styleUrls: ['./mark-down-detail.component.scss']
})
export class MarkDownDetailComponent implements OnInit {

  @Input() markDownSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

  onLoad($event){
    console.log(event);
  }
  onError($event){
    console.log("Error in loading blog post");
    console.log(event);
  }
}
