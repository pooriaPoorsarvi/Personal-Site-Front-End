import { NavScrolService } from './nav-scrol.service';
import { ScrolService } from './scrol.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Personal-Site-Front-End';


  constructor(
    private router: Router,
    private location: Location,
    private scrolService: ScrolService,
  ){}


  ngOnInit(){
    if (location.protocol !== 'https:' && ! location.host.startsWith('localhost')) {
      alert('Redirecting you to https. Please wait :D.');
      location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }
  }




  onScroll(event){
    this.scrolService.move(event);
  }


}
