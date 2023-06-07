import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css']
})
export class InputNameComponent implements OnInit {

  name:string=' ';

  constructor() { }

  ngOnInit(): void {
    this.name="Shubham";
  }

  



}
