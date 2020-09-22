import { ScrolService } from './../scrol.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public isCollapsed = true;

  @ViewChild('mainNav') mainNav: ElementRef<HTMLElement>;
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: string,
    private scrolService: ScrolService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if(this.isBrowser){
      this.scrolService.heightChange.subscribe(
        move => this.navbarCollapse(move)
      );
      $('.js-scroll-trigger').click(function() {
        (<any>$('.navbar-collapse')).collapse('hide');
      });
    }
  }

  navbarCollapse(move: number){
    if (move > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }

}
