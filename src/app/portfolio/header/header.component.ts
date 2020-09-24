import { NavMapService } from './../../nav-map.service';
import { NavScrolService } from './../../nav-scrol.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AboutSectionComponent } from '../about-section/about-section.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private navMapService: NavMapService) { }

  ngOnInit(): void {
  }

  getStarted(){
    this.router.navigate(['/']).then(
      _ => {
        this.navMapService.goToMapping(AboutSectionComponent.mapping);
      }
    );
  }

}
