import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FlightsProvider {
  constructor(public http: Http) {
    console.log('Hello PeopleProvider Provider');
  }
  getPeople(){
    return this.http.get('https://api.spacexdata.com/v1/launches/')
      .map(res=>res.json());
  }

}
