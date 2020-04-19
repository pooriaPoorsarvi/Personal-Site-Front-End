import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
    this.navbarCollapse();
    $(window).scroll(this.navbarCollapse);
    $('.js-scroll-trigger').click(function() {
      (<any>$('.navbar-collapse')).collapse('hide');
    });
    // Activate scrollspy to add active class to navbar items on scroll
    // (<any>$('body')).scrollspy({
    //   target: '#mainNav',
    //   offset: 100
    // });

  }

  navbarCollapse(){
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }

}
