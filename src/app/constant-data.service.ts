import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantDataService {

  constructor() { }

  getCountryNames() {
    return ['America', 'Canada', 'France'];
  }

  getPersonName():string{
    return "Shubham Ashtaputre";
  }

}
