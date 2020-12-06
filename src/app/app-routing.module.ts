import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'blog', loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule)},
  {path: 'apps', loadChildren: () => import('./active-apps/active-apps.module').then(mod => mod.ActiveAppsModule)},
  {path : "", loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)},
  {path : "**", redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
