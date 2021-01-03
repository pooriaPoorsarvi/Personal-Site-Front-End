import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  emailAddress: string = "pooria.poorsarvi.tehrani@mail.utoronto.ca";

  constructor() { }

  ngOnInit(): void {
  }

}
