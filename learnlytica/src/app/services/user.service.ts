import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // baseUrl = environment.production ? environment.baseUrl : '/api/';
  baseUrl = '/api/';

  constructor(private myHttp: HttpClient) { } //get /post

  getUserList() { // Observable // String
    return 'I am from service';
    //return type ? Observable ==> .subcribe( (dt) => { } )
    //return this.myHttp.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
  }

  getUserListFromApi() { //Observable
    return this.myHttp.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
  }

  getProfiles() {
    return this.myHttp.get(`${this.baseUrl}users`) //obs
  }

  submitContactDetails(data: any) {

    return this.myHttp.post(`${this.baseUrl}contact`, data);
  }


  loginUser(uname: string, password: string) {
    //rest api call to express
    let loginData = {
      username: uname,
      password: password
    };

    return this.myHttp.post('api/users/login-user', loginData);
  }


  deleteUser(userid:any) {
    return this.myHttp.delete(`api/users/delete-user/${userid}`);
  }

}
