import { SignUpService } from './services/sign-up.service';
import { PersonalInfoService } from './services/personal-info.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpSectionComponent } from './sign-up-section/sign-up-section.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';
import { AddressComponent } from './contact-section/address/address.component';
import { EmailComponent } from './contact-section/email/email.component';
import { PhoneComponent } from './contact-section/phone/phone.component';
import { SitesComponent } from './contact-section/sites/sites.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignUpSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    AddressComponent,
    EmailComponent,
    PhoneComponent,
    SitesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FontAwesomeModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [PersonalInfoService, SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
