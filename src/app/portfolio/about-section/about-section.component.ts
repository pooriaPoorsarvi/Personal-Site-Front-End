import { NavMapService } from './../../nav-map.service';
import { NavScrolService } from './../../nav-scrol.service';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit, AfterViewInit, OnDestroy{


  @ViewChild('started') started: ElementRef;

  constructor(private navMapService: NavMapService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.navMapService.addToMapping(AboutSectionComponent.name, this.started);
  }

  ngOnDestroy(){
    this.navMapService.deletMapping(AboutSectionComponent.name);
  }

}
