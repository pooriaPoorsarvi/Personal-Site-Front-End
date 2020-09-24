import { NavMapService } from './../../nav-map.service';
import { NavScrolService } from './../../nav-scrol.service';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit, AfterViewInit, OnDestroy{
  public static get mapping() {return 'AboutSectionComponent'; }


  @ViewChild('started') started: ElementRef;

  constructor(private navMapService: NavMapService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.navMapService.addToMapping(AboutSectionComponent.mapping, this.started);
  }

  ngOnDestroy(){
    this.navMapService.deletMapping(AboutSectionComponent.mapping);
  }

}
