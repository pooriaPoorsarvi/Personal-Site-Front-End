import { PortfolioComponent } from './portfolio.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';


const paths : Routes = [
  {"path" : "", component : PortfolioComponent}
];

@NgModule({
  imports : [RouterModule.forChild(paths)],
  exports : [RouterModule]
})
export class PortfolioRouterModule{

}

