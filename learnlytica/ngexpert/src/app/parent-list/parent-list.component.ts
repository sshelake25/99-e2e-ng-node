import { Component, OnInit } from '@angular/core';

@Component(
  {
    selector: 'app-parent-list',
    templateUrl: './parent-list.component.html',
    // template: `
    // <h2>I am inn parent compu .ts</h2>
    // <h6>IIIIII</h6>
    // <app-child-item
    //     [configList] = "myData"
    //     [ageConfig] ="ageData"
    // >
    // </app-child-item>
    // `
    // ,
    styleUrls: ['./parent-list.component.css'],
    // styles: [
    //   'h1 { font-weight: normal; }',
    //   'h6 {font-size : 50px;}'
    // ]
  }
)
export class ParentListComponent implements OnInit {
  myData = 'THSB';
  ageData = 2020;

  constructor() { }

  ngOnInit(): void {
  }

}
