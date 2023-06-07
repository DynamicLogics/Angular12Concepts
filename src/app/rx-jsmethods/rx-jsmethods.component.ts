import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { filter, map, switchMap, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rx-jsmethods',
  templateUrl: './rx-jsmethods.component.html',
  styleUrls: ['./rx-jsmethods.component.css']
})
export class RxJSMethodsComponent implements OnInit {

    /*
      In Angular, the of operator is not specific to Angular itself, but it is a feature provided by 
      RxJS (Reactive Extensions for JavaScript). RxJS is a library that brings reactive programming concepts to JavaScript applications.
      The of operator in RxJS creates an observable that emits a sequence of values you provide as arguments. 
      It is often used to create an observable from a fixed set of values. In my example, of(1,2,3,4,5,6) would 
      create an observable that emits the values 1,2,3,4,5 and 6 in that order.
    */
    source = of(1,2,3,4,5,6);

  constructor() { }

  ngOnInit(): void {
    console.log("Inside the RxJSMethodsComponent");
    this.mapMethod();
    this.filterMethod();
    this.tapMethod();
    this.swtichMapMethod();
    this.takeWhileMethod();
  }

  public mapMethod():void {

    console.log("Inside rxjs Map operator");
    /*
    In Angular, the pipe method is used in conjunction with RxJS (Reactive Extensions for JavaScript) to combine 
    multiple operators into a single operator chain. It allows you to transform, filter, and manipulate data streams 
    in a declarative and composable manner.

    The pipe method is a feature of the Observable class provided by RxJS. It takes one or more operators as arguments and 
    returns a new observable with the operators applied in the specified order. Each operator in the pipe chain processes the 
    data emitted by the previous operator, allowing you to perform a series of transformations on the data stream.
    */
    this.source.pipe(
      map((value) => value * 2)
    ).subscribe((value) => {
      console.log(value);
    });

  }

  public filterMethod():void {

    console.log("Inside rxjs Filter operator");

    this.source.pipe(
      filter((value)=>value%2===0)
    ).subscribe((value)=>{
        console.log(value);
    });

  }

  public tapMethod():void {

    console.log("Inside rxjs Tap operator");

    this.source.pipe(
      // It allows you to perform side effects or take actions on the emitted values of an Observable without modifying them.
      tap((value)=>console.log('Value: ',value))
    ).subscribe();

  }

  public takeWhileMethod():void {

    console.log("Inside rxjs TakeWhile operator");

    const source = interval(1000);

    source.pipe(
      /*
       It emits values from the source Observable as long as a specified condition remains true, and 
       completes as soon as the condition becomes false.
      */
      takeWhile((value)=>value<6)
    ).subscribe((value)=>{
      console.log(value)
    });

  }

  public swtichMapMethod():void {

    console.log("Inside rxjs SwtichMap operator");

    const source = of('a','b','c','d','e');

    source.pipe(
      /*
       It transforms the source Observable into a new Observable and cancels the previous inner 
       Observable when a new value is emitted. It is commonly used for handling asynchronous operations, such as making HTTP requests.
      */
      switchMap(value=>{
          return value.toUpperCase();
        })
      ).subscribe((value)=>{
          console.log(value);
      });

  }

}
