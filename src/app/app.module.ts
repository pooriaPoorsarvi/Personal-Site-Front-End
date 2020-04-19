import { PortfolioModule } from './portfolio/portfolio.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpSectionComponent } from './sign-up-section/sign-up-section.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignUpSectionComponent
  ],
  imports: [
    BrowserModule,
    PortfolioModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
