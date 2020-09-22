import { NavScrolService } from './../../nav-scrol.service';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit, AfterViewInit{


  @ViewChild('started') started: ElementRef;

  constructor(private navScrolService: NavScrolService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.navScrolService.addStarted(this.started);
  }

}
