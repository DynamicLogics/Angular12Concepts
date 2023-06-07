import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipe, PipesExamplesComponent } from 'src/app/pipes-examples/pipes-examples.component';
import { LazyAppRoutingModule } from '../Routes/app-routing.module';
/*
 to do lazy loading in angular follow the below steps

 1] Create a new module file using {ng g module <module-name>} in this case LazyModuleModule file is created

 2] Then create a new file file in our case I had created a new routing file named as LazyAppRoutingModule

 3] Then include the components and services files that you want to lazy load i.e. only load when they are
    needed into the declarations of our LazyModuleModule file

  4] In our main rotuing file i.e. AppRoutingModule file create a route for our module file like below:

////////////////////////////////////////////////////////////////////////////////////////////////////////    
/    {path:'lazy',loadChildren:()=>import('./Lazy_Loading/lazy-module/lazy-module.module').            /
/                                  then(m=>m.LazyModuleModule)                                         /
////////////////////////////////////////////////////////////////////////////////////////////////////////

5] Now to access the lazy loaded components use the url as 'http://localhost:4200/lazy/pipes' 

*/
@NgModule({
  declarations: [
    PipesExamplesComponent,
    CustomPipe
  ],
  imports: [
    CommonModule,
    LazyAppRoutingModule
  ]
})
export class LazyModuleModule {
  constructor(){
    console.log('Lazy modules module file called')
  }
}
