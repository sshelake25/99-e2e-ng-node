import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  person = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'IND'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },

  ];

  getColors(code: string) {
    switch (code) {
      case 'IND':
        return 'blue';
        break;

      case 'USA':
        return 'yellow';
        break;
      default:
        return 'red';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
