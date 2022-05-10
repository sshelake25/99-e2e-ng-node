import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
// added data into json file file, we can give api call httpclient service



@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  userTitle?: string;
  userFromApi?: any;

  constructor(private myUserSrv: UserService) { } //inject into contructor

  ngOnInit(): void {
    this.userTitle = this.myUserSrv.getUserList(); // string 
    this.myUserSrv.getUserListFromApi()
      .pipe(
        //Once done let me know, or if issue please speak up
        //rxjs operator -> going hold data
        tap((userList: any) => { //array of object
          return userList.map(
            (element: any, index: number, arr: any) => { // loop over array 
              //object
              element['title'] = 'thbs ' + index ;
              element['name'] = "Mr. " + element['name'];
              return element;  // return modifed object
            })
        })
      )
      .subscribe(
        (myUser) => {
          console.log(myUser)
          this.userFromApi = myUser
        }
      );

    //this.userFromApi.subscribe();

    console.log(this.userFromApi)

  }

}
