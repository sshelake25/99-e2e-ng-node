import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  //create resuable code
  // send api call or backend call 
  //httpclient --> inbuild by ng to send api calls 
  constructor(private myHttp: HttpClient) {
  }

  getCourseConfigs() {
    return this.myHttp.get('https://httpstat.us/200');
  }

  getCourseList() {
    //observable
    return this.myHttp.get('assets/mock-data/courses-list.json');
  }

}
