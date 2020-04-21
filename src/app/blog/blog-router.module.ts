import { BlogComponent } from './blog.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';


const paths : Routes = [
  {"path" : "", component : BlogComponent}
];

@NgModule({
  imports : [RouterModule.forChild(paths)],
  exports : [RouterModule]
})
export class DetailRouterModule{

}

