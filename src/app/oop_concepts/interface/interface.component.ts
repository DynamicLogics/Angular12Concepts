import { Component, OnInit } from '@angular/core';

//creating an interface class
interface Country{
  getCountryName():string;
}

//implementing the interface
class India implements Country{
  getCountryName():string{
    return "This country name is INDIA";
  }
}

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  constructor() { }

  intrFcExample = new India();

  ngOnInit(): void {
    console.log(this.intrFcExample.getCountryName());
  }

}
