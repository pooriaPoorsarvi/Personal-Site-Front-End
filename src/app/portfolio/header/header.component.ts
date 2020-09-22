import { NavScrolService } from './../../nav-scrol.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private navScrolService: NavScrolService) { }

  ngOnInit(): void {
  }

  getStarted(){
    this.router.navigate(['/']).then(
      _ => {
        this.navScrolService.moveToStarted();
      }
    );
  }

}
