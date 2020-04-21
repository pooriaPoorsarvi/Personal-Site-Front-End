import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : "", loadChildren:'./portfolio/portfolio.module#PortfolioModule'},
  {path: "blog", loadChildren : "./blog/blog.module#BlogModule"},
  {path : "**", redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
