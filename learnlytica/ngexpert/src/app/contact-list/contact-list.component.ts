import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  recivedData: any;
  constructor() { }

  ngOnInit(): void {
  }

  recivedChildData(myval: string) {
    this.recivedData = myval;
    // alert(myval);
  }
}
