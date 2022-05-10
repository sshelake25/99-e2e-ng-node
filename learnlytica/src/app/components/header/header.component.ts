import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { LoginComponent } from '../login/login.component';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAboutUs = false;
  constructor(
    private myDialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((data: any) => {
        this.isAboutUs = data['url'] === '/services';
      })
  }


  openDialog() {
    const dialogRef = this.myDialog
      .open(
        ContactFormComponent,
        {
          height: '500px',
          width: '600px',
          // disableClose: true
        }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
