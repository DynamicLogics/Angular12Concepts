import { Component, OnInit } from '@angular/core';

//creating an abstract class
abstract class Person{
  constructor(){
    console.log("Inside Abstract class constuctor");
  }
  abstract personName():string; 
}

//implementing the abstract class
class PersonDetails extends Person{
  
  name:string;

  constructor(name:string){
      //you need to call the super keyword, it don't have the default super method implemented
      super();
      this.name = name;
  }
  
  //implmenting the abstract method
  personName(): string {
    return this.name;
  }
} 

@Component({
  selector: 'app-abstraction',
  templateUrl: './abstraction.component.html',
  styleUrls: ['./abstraction.component.css']
})
export class AbstractionComponent implements OnInit {

  person = new PersonDetails("Shubham Ashtaputre");

  constructor() { }

  ngOnInit(): void {
    console.log(this.person.personName());
  }

}
