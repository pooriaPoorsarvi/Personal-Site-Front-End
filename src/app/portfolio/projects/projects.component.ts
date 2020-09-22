import { NavScrolService } from './../../nav-scrol.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit{

  @ViewChild('projects') projects: ElementRef;

  constructor(private navScrolService: NavScrolService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.navScrolService.addProjects(this.projects);
  }

}
