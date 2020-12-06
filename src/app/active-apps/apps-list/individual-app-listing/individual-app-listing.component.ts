import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-individual-app-listing',
  templateUrl: './individual-app-listing.component.html',
  styleUrls: ['./individual-app-listing.component.scss']
})
export class IndividualAppListingComponent implements OnInit {



  @Input() imageSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
