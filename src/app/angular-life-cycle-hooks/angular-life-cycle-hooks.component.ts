import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

///////////////////////CHILD///////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'childcompo',
  template: `
    <div>Current value: {{childData}}</div>
  `
})
export class AngularLifeCycleHooksComponent implements OnInit,OnChanges,OnDestroy {
  
  @Input() childData:string = ' ';
  
  constructor() { }
  
  /*
    This hook is called after the first ngOnChanges and after the constructor.
    It is used to perform initialization tasks such as retrieving data from a remote server.
  */
  ngOnInit(): void {
    console.log("Inside ngOnInit method");
  }

  /*
     the ngOnChanges hook is used to log a message to the console whenever 
     the value of the 'childData' input property changes.
  */
  ngOnChanges(changes:SimpleChanges){
    console.log("Inside ngOnChanges method");
    console.log("ChildData: "+this.childData);
  }

  /*
     This hook is called just before the component or directive is destroyed. 
     It is used to perform cleanup tasks such as unsubscribing from observables 
     and detaching event handlers.
  */
  ngOnDestroy(): void {
    console.log("Inside ngOnDestroy method");
  }

}
//////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////PARENT////////////////////////////////////////////////////////////////////////
/*
 * You need to add this Parent component inside the module class
 */
@Component({
  selector: 'parentcompo',
  template: `
    <input [(ngModel)]="myName" placeholder="Enter data">
    <childcompo [childData]="myName"></childcompo>
  `
})
export class ParentClass{
  myName:string='';
  constructor(){}
  //@ViewChild(AngularLifeCycleHooksComponent) childRef!: AngularLifeCycleHooksComponent;
}
///////////////////////////////////////////////////////////////////////////////////////////////////

/*

BELOW ARE THE VARIOUS LIFECYLCEL HOOKS PRESENT ISIDE ANGULAR AND THEIR PURPOSES:

ngOnChanges: This hook is called whenever one or more data-bound input properties change. 
             It receives a SimpleChanges object that provides information about the changes.

ngOnInit: This hook is called after the first ngOnChanges and after the constructor. 
          It is used to perform initialization tasks such as retrieving data from a remote server.

ngDoCheck: This hook is called during every change detection cycle. 
           It is used to detect and respond to changes that Angular can't or won't detect automatically.

ngAfterContentInit: This hook is called after content has been projected into the component or directive. 
                    It is used to perform initialization tasks that depend on the content.

ngAfterContentChecked: This hook is called after every check of the projected content. 
                       It is used to respond to changes in the projected content.

ngAfterViewInit: This hook is called after the component's view has been initialized. 
                 It is used to perform initialization tasks that depend on the view.

ngAfterViewChecked: This hook is called after every check of the component's view. 
                    It is used to respond to changes in the view.

ngOnDestroy: This hook is called just before the component or directive is destroyed. 
             It is used to perform cleanup tasks such as unsubscribing from observables 
             and detaching event handlers.

*/

