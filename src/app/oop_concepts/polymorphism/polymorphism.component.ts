import { Component, OnInit } from '@angular/core';

class Polymorphism{
  
  constructor(){

  }
  
  //Here I'am trying to implement the method overloading
  addition(x: number, y: number): number;
  addition(x: number, y: number, z: number): number;

  /*
  
  1] Here I'am actually implementing the logic for method overloading
  
  2] Unlike Java here I cannot simply create two separate methos with same name
  
  3] It will throw method duplication exception
  
  4] 4.1]In TypeScript, the ? symbol is used to indicate an optional parameter in a function or method. 
     In the example I provided earlier, z?: number is an optional parameter in the add method of the 
     Calculator class.
  
     4.2]This means that when the add method is called, you can choose to pass in two or three arguments. 
     If you only pass in two arguments, the third parameter z will be undefined. 
     If you pass in three arguments, the value of the third argument will be assigned to z.

  */
  addition(x:number,y:number,z?:number):number{
    if(z){
      return x+y+z;
    }else{
      return x+y;
    }
  }

}

class ChildClass extends Polymorphism{
    
  c:number=0;

  constructor(){
      super();
  }

  //here I'am doing method overriding/runtime polymorphism
  public addition(x: number, y: number): number {
    this.c = x+y;
    return this.c;
  }

}

@Component({
  selector: 'app-polymorphism',
  templateUrl: './polymorphism.component.html',
  styleUrls: ['./polymorphism.component.css']
})
export class PolymorphismComponent implements OnInit {

  poly = new ChildClass();
  parPoly = new Polymorphism();

  constructor() { }

  ngOnInit(): void {
    console.log(this.poly.addition(14,13));
    console.log(this.parPoly.addition(10,20,30));
  }

}
