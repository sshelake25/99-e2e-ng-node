import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isEnable = false;

  isFriday: string;

  constructor() {
    const d = new Date(); //js object
    //ternary oprator 
    this.isFriday = d.getDay() < 3 ? 'Day is monday tue or web' : 'firday sat sund ';
  }

  ngOnInit(): void {
  }


}
