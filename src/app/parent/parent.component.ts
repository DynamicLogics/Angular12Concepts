import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentData: string = '';

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  /*
    Here I'am reference to the child component using the @ViewChild() decorator.
  */
  //@ViewChild(ChildComponent) childRef!: ChildComponent;

  //calling this 'getChildData' method to display message from child component
  getChildData(value:string) {
    //console.log("Hello inside getChildData method");
    /*
      here I'am calling the sendDataEvent variable that I have declared in my child component 
      and then I am calling it here using child reference object
      so that the value emitted by my child component will be fetched and display into 
      logs of my parent component
    */
    console.log(value);
    //alert(this.childRef.childData);
  }

}
