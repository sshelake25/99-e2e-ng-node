import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THBS CLOUD';
  listOfNumber = ['mango', 'watermelone','banana'];
  message = "Good Morning, everyone";

  listOfPerson = {
    name: 'THBS',
    age: 2020
  };

}
