import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  address: string = "Toronto, On";

  constructor() { }

  ngOnInit(): void {
  }

}
