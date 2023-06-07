import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe, PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { DependencyinjectionExampleComponent } from './dependencyinjection-example/dependencyinjection-example.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomDirectiveImplmentationComponent } from './custom-directive-implmentation/custom-directive-implmentation.component';
import { AbstractionComponent } from './oop_concepts/abstraction/abstraction.component';
import { InterfaceComponent } from './oop_concepts/interface/interface.component';
import { InheritenceComponent } from './oop_concepts/inheritence/inheritence.component';
import { PolymorphismComponent } from './oop_concepts/polymorphism/polymorphism.component';
import { AngularLifeCycleHooksComponent, ParentClass } from './angular-life-cycle-hooks/angular-life-cycle-hooks.component';
import { Page404NotFoundComponent } from './page404-not-found/page404-not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './Security/Interceptors/auth-interceptor.interceptor';
import { InputNameComponent } from './Test_Cases_Writing/input-name/input-name.component';
import { RxJSMethodsComponent } from './rx-jsmethods/rx-jsmethods.component';
import { JSONFileOperationsComponent } from './json-file-operations/json-file-operations.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    //PipesExamplesComponent,
    //CustomPipe,
    DependencyinjectionExampleComponent,
    StructuralDirectivesComponent,
    CustomDirectiveDirective,
    CustomDirectiveImplmentationComponent,
    AbstractionComponent,
    InterfaceComponent,
    InheritenceComponent,
    PolymorphismComponent,
    AngularLifeCycleHooksComponent,
    ParentClass,
    Page404NotFoundComponent,
    InputNameComponent,
    RxJSMethodsComponent,
    JSONFileOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  /*
    Here, the AuthInterceptor is provided as an HTTP_INTERCEPTORS token, 
    and the multi: true option indicates that this provider is part of a list of providers.
  */
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule{
  constructor(){
    console.log('Inisde Root Module File')
  }
}
