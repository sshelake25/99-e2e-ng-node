import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  listLangs: string[] = ['ENG', 'HIND', 'TELGU'];
  email: any;

  isUserAdded = false;

  constructor(private myhttp: HttpClient) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log(this.email)
  }

  getFormsValue(formRef: any) {

    let data = {
      username: formRef.value.fname,
      email: formRef.value.myEmail,
      password: formRef.value.passw,
      first_name: formRef.value.fname,
      last_name: formRef.value.lname,
      job_title: formRef.value['my-langs'],
      salary: 100,
      create_datetime: new Date().toJSON().slice(0, 10)
    };

    //api rest call to backend server
    //http://localhost:3000/api/users/create-user
    this.myhttp.post('/api/users/create-user', data, { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
        this.isUserAdded = true;
        formRef.form.reset();
      });

  }

}
