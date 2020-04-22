import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogEntity, BlogService } from './../blog.servicce';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  blogEntity: BlogEntity = new BlogEntity();
  private id: string;

  constructor(private blogService: BlogService, private ref: ChangeDetectorRef, private route: ActivatedRoute) {
    this.blogEntity.markDown = '';
    this.id = this.route.snapshot.params.id;
    this.getIndividualParam();

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.getIndividualParam();
      }
    );

  }

  getIndividualParam(){

    const sub: Subscription = this.blogService.getByID(this.id).subscribe(
      value => {
        this.blogEntity = value;
        this.ref.detectChanges();
        sub.unsubscribe();
      },
      err => {
        console.log('error in recieving the blog post');
        sub.unsubscribe();
      }
    );
  }

  ngOnInit(): void {}
}
