import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  //@Input() decorator to expose it as an input property for the child component.
  @Input() childData: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  /*
    Here I'am defining an event and emitting it using the EventEmitter class and the emit() method.
  */
  @Output() sendDataEvent = new EventEmitter<string>();

  sendData() {
    console.log('calling the sendData method');
    //here this message present insde emit method will be sent to parent class
    this.sendDataEvent.emit('Data sent from child component');
    //or if I want to pass any simple string message that too I can pass
    //this.childData="hi";
  }

}
