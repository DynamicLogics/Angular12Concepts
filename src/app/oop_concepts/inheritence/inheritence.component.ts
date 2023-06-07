import { Component, OnInit } from '@angular/core';

//creating the parent class
class Calculator{

  x:number=0;
  y:number=0;

  constructor(){
    console.log("Inisde parent class");
  }

  public addition(x:number,y:number){
    return x+y;
  }

  public substraction(x:number,y:number){
    return x-y;
  }

  private division(x:number,y:number){
    return x-y;
  }

}

//extending the child class with parent class
class ScientificCalculator extends Calculator{
  x:number=0;
  y:number=0;

  constructor() { 
    super();
  }

  public multiplication(x:number,y:number){
    return x*y;
  }

}

@Component({
  selector: 'app-inheritence',
  templateUrl: './inheritence.component.html',
  styleUrls: ['./inheritence.component.css']
})
export class InheritenceComponent implements OnInit {

  constructor() { 
  }

  childClass = new ScientificCalculator();

  ngOnInit(): void {
    console.log(this.childClass.addition(2,2));
    console.log(this.childClass.substraction(6,3));
    console.log(this.childClass.multiplication(3,3));
  }

}
