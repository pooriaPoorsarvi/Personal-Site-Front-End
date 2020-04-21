import { DetailRouterModule } from './blog-router.module';
import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [BlogComponent, BlogPostComponent],
  imports: [
    CommonModule,
    DetailRouterModule,
    MarkdownModule.forRoot()
  ]
})
export class BlogModule { }
