/*
1] To make routign work in the app.component.html page add <router-outlet></router-outlet> tags
2] The router-outlet is the placeholder where Angular will render the 
   components corresponding to the current route.
*/

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PipesExamplesComponent } from "src/app/pipes-examples/pipes-examples.component";

const routes: Routes = [
//Here, 'canActivate' is used for routeguarding the 'ParentComponent' component
  {path:'pipes',component:PipesExamplesComponent},
];
/*
  Here, to include routing inside LazyModuleModule use the method 'forChild' not 'forRoot'
  as used inside AppRoutingModule
*/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyAppRoutingModule { }
