import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  {
    path: '', component: BlogComponent, children: [
      {path: 'blog-list', component: BlogListComponent},
      {path: 'blog-post', component: BlogPostComponent},
      {path: '', redirectTo:"blog-list"}
    ]
  },
];


@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class BlogRouterModule{

}

