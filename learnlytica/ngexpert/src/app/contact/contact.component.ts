import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() sendMessage = new EventEmitter();
  // @Output() sendMessage_String = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.sendMessage.emit({
      name: 'thbs',
      age: 2020,
      contact_no: 9090909090
    });
  }

}
