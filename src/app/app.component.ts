import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Personal-Site-Front-End';

  constructor(private router: Router, private location: Location){}


  ngOnInit(){
    if (location.protocol !== 'https:' && ! location.host.startsWith('localhost')) {
      alert('Redirecting you to https. Please wait :D.');
      location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }
  }


}
