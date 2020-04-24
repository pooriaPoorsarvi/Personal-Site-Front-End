import { Component, OnInit } from '@angular/core';
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

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if(this.isBrowser){
      this.navbarCollapse();
      $(window).scroll(this.navbarCollapse);
      $('.js-scroll-trigger').click(function() {
        (<any>$('.navbar-collapse')).collapse('hide');
      });
    }
  }

  navbarCollapse(){
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }

}
