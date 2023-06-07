import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-json-file-operations',
  templateUrl: './json-file-operations.component.html',
  styleUrls: ['./json-file-operations.component.css']
})
export class JSONFileOperationsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Reading JSON value ");
    this.displayJSONValues();
  }

  readJSONFile():Observable<any>{
    return this.http.get<any>('http://127.0.0.1/Sample_File_A.json');
  }

  displayJSONValues():void{
    this.readJSONFile().subscribe(data=>{
      console.log(data);
    });
  }



}
