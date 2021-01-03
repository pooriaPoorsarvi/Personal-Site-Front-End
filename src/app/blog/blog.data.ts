import { Observable, Subject } from 'rxjs';
import { BlogEntity } from './blog.servicce';
import { Injectable } from "@angular/core";



@Injectable({providedIn: 'root'})

export class BlogData{

  private data: BlogEntity[] = [
    {
      id: 1,
      title: `<i>Intro to the making of my website</i>`,
      intro: `<div class="featured-text text-center text-lg-left">
      <h4>Intro to the making of my website</h4>
      <p class="text-black-50 mb-0">Learn all about how I made this website, and what technologies were used. This is just a big summary of all the technologies.</p>
    </div>`,
      imageSrc: 'https://www.advantageservices.net/photos/articles/correct/gettyimages-881467948.jpg',
      markDownSrc: `https://ppt-productions-blog-posts.s3.us-east-2.amazonaws.com/testIntro.md`,
    },
    {
      id: 2,
      title: `<i>Intro to making of my self hosted versioning system.</i>`,
      intro: `<div class="featured-text text-center text-lg-left">
      <h4>Intro to the making of your own versioning system</h4>
      <p class="text-black-50 mb-0">Learn all about how I made own serve hosted versioning system</p>
    </div>`,
      imageSrc: 'https://www.linode.com/docs/guides/introduction-to-version-control/1204-image_versioning_intro_1.jpg',
      markDownSrc: `https://ppt-productions-blog-posts.s3.us-east-2.amazonaws.com/gitBlog.md`,
    }
  ];
  private blogPostsSubject = new Subject<BlogEntity[]>();
  public get blogPostsObservable(): Observable<BlogEntity[]> { return this.blogPostsSubject.asObservable() }
  private blogPostSubject = new Subject<BlogEntity>();
  public get blogPostObservable(): Observable<BlogEntity> { return this.blogPostSubject.asObservable() }
  getBlogPosts(): void{
    this.blogPostsSubject.next(this.data.slice());
  }

  getBlogPost(id: number): void {
    this.blogPostSubject.next(this.data.filter(f => f.id === id)[0]);
  }


}
























