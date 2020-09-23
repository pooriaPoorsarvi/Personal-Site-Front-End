import { NavMapService } from './../../nav-map.service';
import { NavScrolService } from './../../nav-scrol.service';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChild('projects') projects: ElementRef;

  constructor(private navMapService: NavMapService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.navMapService.addToMapping(ProjectsComponent.name, this.projects);
  }

  ngOnDestroy() {
    this.navMapService.deletMapping(ProjectsComponent.name);
  }

}
