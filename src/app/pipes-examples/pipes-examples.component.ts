import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.css']
})
export class PipesExamplesComponent implements OnInit {

  myName:string = 'Shubham Ashtaputre';

  todaysDate:string = '03/05/2023';

  constructor() { }

  ngOnInit(): void {
  }

}

/*
Also include this custom pipe component in module.ts file
else your custom pipe will not work
*/
@Pipe({name:'customPipe'})
export class CustomPipe implements PipeTransform{
  
  transform(value: string, length: number = 50): string {
    if (value.length > length) {
      return value.substr(0, length) + '...';
    } else {
      return value;
    }
  }

}
