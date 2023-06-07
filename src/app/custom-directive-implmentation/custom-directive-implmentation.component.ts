import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive-implmentation',
  templateUrl: './custom-directive-implmentation.component.html',
  styleUrls: ['./custom-directive-implmentation.component.css']
})
export class CustomDirectiveImplmentationComponent implements OnInit {
/*
  I had defined my custom directive in class 'CustomDirectiveDirective' and here I'am just
  implementing my custom directive
*/
  constructor() { }

  ngOnInit(): void {
  }

}
