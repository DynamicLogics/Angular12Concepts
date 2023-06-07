import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { DependencyinjectionExampleComponent } from './dependencyinjection-example/dependencyinjection-example.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { CustomDirectiveImplmentationComponent } from './custom-directive-implmentation/custom-directive-implmentation.component';
import { AbstractionComponent } from './oop_concepts/abstraction/abstraction.component';
import { InheritenceComponent } from './oop_concepts/inheritence/inheritence.component';
import { InterfaceComponent } from './oop_concepts/interface/interface.component';
import { PolymorphismComponent } from './oop_concepts/polymorphism/polymorphism.component';
import { AngularLifeCycleHooksComponent, ParentClass } from './angular-life-cycle-hooks/angular-life-cycle-hooks.component';
import { Page404NotFoundComponent } from './page404-not-found/page404-not-found.component';
import { AuthGuard } from './Security/AuthGuard/auth.guard';
import { RxJSMethodsComponent } from './rx-jsmethods/rx-jsmethods.component';
import { JSONFileOperationsComponent } from './json-file-operations/json-file-operations.component';

/*
1] To make routign work in the app.component.html page add <router-outlet></router-outlet> tags
2] The router-outlet is the placeholder where Angular will render the 
   components corresponding to the current route.
*/

const routes: Routes = [
  //here, 'canActivate' is used for routeguarding the 'ParentComponent' component
  {path:'',component:ParentComponent, canActivate:[AuthGuard]},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  //{path:'pipes',component:PipesExamplesComponent},
  {path:'di',component:DependencyinjectionExampleComponent},
  {path:'sd',component:StructuralDirectivesComponent},
  {path:'cd',component:CustomDirectiveImplmentationComponent},
  {path:'abc',component:AbstractionComponent},
  {path:'inhr',component:InheritenceComponent},
  {path:'intrFc',component:InterfaceComponent},
  {path:'poly',component:PolymorphismComponent},
  {path:'alch',component:PolymorphismComponent},
  {path:'lch',component:ParentClass},
  {path:'404',component:Page404NotFoundComponent},
  {path:'lazy',loadChildren:()=>import('./Lazy_Loading/lazy-module/lazy-module.module').
               then(m=>m.LazyModuleModule)},
  {path:'rxjsMethods', component:RxJSMethodsComponent},
  {path:'json', component:JSONFileOperationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
