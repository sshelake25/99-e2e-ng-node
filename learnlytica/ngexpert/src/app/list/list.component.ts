import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  itemList = [
    {
      title: 'Mangoes',
      cantent: 'These are mangoes with blue',
      btnText: 'Buy Mongos',
      link: 'https://google.com',
      imageLink: "https://i.picsum.photos/id/696/200/300.jpg?hmac=Ukxvga_1GYxgfAqzwDhBPfVta6-hJKUhayVlI1yMIdk"
    },
    {
      title: 'Orages',
      cantent: 'These are mangoes with green',
      btnText: 'Buy Orages &  get 50%',
      link: 'https://amazon.com',
      imageLink: "https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312"
    },
    {
      title: 'Apples',
      cantent: 'All kinds of apple with 100%, organice farm',
      btnText: 'Buy Organic Apple',
      link: 'https://justdial.com',
      imageLink: "https://i.picsum.photos/id/696/200/300.jpg"
    },
  ];//array of object

  constructor() { }

  ngOnInit(): void {
  }

}
