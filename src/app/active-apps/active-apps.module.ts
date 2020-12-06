import { ActiveAppsRouterModule } from './active-apps-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveAppsComponent } from './active-apps.component';
import { AppsListComponent } from './apps-list/apps-list.component';
import { IndividualAppListingComponent } from './apps-list/individual-app-listing/individual-app-listing.component';
import { AppPostingComponent } from './app-posting/app-posting.component';



@NgModule({
  declarations: [ActiveAppsComponent, AppsListComponent, IndividualAppListingComponent, AppPostingComponent],
  imports: [
    CommonModule,
    ActiveAppsRouterModule,
  ]
})
export class ActiveAppsModule { }
