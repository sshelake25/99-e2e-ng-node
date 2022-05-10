import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  cList: any;
  myTitle: string = 'THBS';

  userList: any;
  //obs naming convestion 
  myUserList$!: any;

  constructor(
    private mConfig: ConfigService,
    private myUserSrv: UserService) { }

  ngOnInit(): void {

    this.mConfig.getCourseList().subscribe((sdata) => {
      this.cList = sdata;
    });

    // this.myUserSrv.getProfiles().subscribe((result: any) => {
    //   this.userList = result;
    // });

    this.myUserList$ = this.myUserSrv.getProfiles();

  }

}
