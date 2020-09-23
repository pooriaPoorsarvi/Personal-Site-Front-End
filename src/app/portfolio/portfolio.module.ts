import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ProjectsComponent } from './projects/projects.component';
import { FeaturedProjectComponent } from './projects/featured-project/featured-project.component';
import { GeneralProjectComponent } from './projects/general-project/general-project.component';
import { PortfolioRouterModule } from './portfolio-router.module';
import { SamplesComponent } from './projects/samples/samples.component';



@NgModule({
  declarations: [
    HeaderComponent,
     PortfolioComponent,
     AboutSectionComponent,
     ProjectsComponent,
     FeaturedProjectComponent,
     GeneralProjectComponent,
     SamplesComponent
    ],
  imports: [
    CommonModule,
    PortfolioRouterModule,
    IonicModule
  ],
  exports:[PortfolioComponent]
})
export class PortfolioModule { }
