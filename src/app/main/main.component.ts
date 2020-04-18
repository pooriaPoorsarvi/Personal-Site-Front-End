import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { faCat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  faCoffee = faCat;
  
  ngOnInit(): void {
    this.navbarCollapse();
    $(window).scroll(this.navbarCollapse);
  }

  navbarCollapse(){
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }
}
