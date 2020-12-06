import { AppPostingComponent } from './app-posting/app-posting.component';
import { AppsListComponent } from './apps-list/apps-list.component';
import { ActiveAppsComponent } from './active-apps.component';



import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '', component: ActiveAppsComponent, children: [
      {path: 'apps-list', component: AppsListComponent},
      {path: 'apps-posting/:id', component: AppPostingComponent},
      {path: '', redirectTo:"apps-list"}
    ]
  },
];


@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class ActiveAppsRouterModule{

}












