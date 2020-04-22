import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {}
  navigateToPost(){
    this.router.navigate(["blog", "blog-post"]);
  }

}
