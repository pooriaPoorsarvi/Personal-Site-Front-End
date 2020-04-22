import { BlogEntity, BlogService } from './../blog.servicce';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogEntities: BlogEntity[] = [];

  constructor(public router: Router, private blogService: BlogService) {
    blogService.getAll().subscribe(
      value => {
        this.blogEntities = value;
      },
      err => {
        console.log('error in recieving the blog post');
      }
    );
  }

  ngOnInit(): void {}
  navigateToPost(id: number){
    this.router.navigate(['blog', 'blog-post', String(id)]);
  }

}
