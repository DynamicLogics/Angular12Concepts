import { Component, OnInit } from '@angular/core';
import { ConstantDataService } from '../constant-data.service';

@Component({
  selector: 'app-dependencyinjection-example',
  templateUrl: './dependencyinjection-example.component.html',
  styleUrls: ['./dependencyinjection-example.component.css'],
  /*
    here I have added the `ConstantDataService` to the `providers` array of the `@Component`
    decorator. This tells Angular to create an instance of the `ConstantDataService` 
    and make it available to the `DependencyinjectionExampleComponent`.
  */
  providers:[ConstantDataService]
})
export class DependencyinjectionExampleComponent implements OnInit {

  constantDataService:any;

  constructor(cDS:ConstantDataService) { 
    //this.constantDataService = cDS;
    /*
      here I'am passing the values that is present inside 
      getCountryNames method to constantDataService
    */
    this.constantDataService = cDS.getCountryNames();
  }

  ngOnInit(): void {
    //console.log(this.constantDataService.getPersonName());
    //console.log(this.constantDataService.getCountryNames()[0]);
    //console.log(this.constantDataService.getCountryNames());
    console.log(this.constantDataService);
  }

}
