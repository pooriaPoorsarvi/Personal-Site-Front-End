import { BlogService } from './blog.servicce';
import { BlogRouterModule } from './blog-router.module';
import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { MarkdownModule } from 'ngx-markdown';
import { BlogListComponent } from './blog-list/blog-list.component';
import { IndividualBlogSnippetComponent } from './blog-list/individual-blog-snippet/individual-blog-snippet.component';
import { MarkDownDetailComponent } from './blog-post/mark-down-detail/mark-down-detail.component';


@NgModule({
  declarations: [BlogComponent, BlogPostComponent, BlogListComponent, IndividualBlogSnippetComponent, MarkDownDetailComponent],
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    BlogRouterModule,
  ],
  exports : [BlogComponent],
  providers : [BlogService]
})
export class BlogModule { }
