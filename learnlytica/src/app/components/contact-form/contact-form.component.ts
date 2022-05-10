import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  langs = ['ENG', "HIND", 'TELGU', 'KANDA'];

  myform: FormGroup = new FormGroup(
    {
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email_thbs: new FormControl('',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(4)
        ]
      ),
      password: new FormControl('',
        [Validators.required, Validators.minLength(5), Validators.maxLength(10)]
      ),
      lang: new FormControl('',)
    }
  );

  constructor(private usrService: UserService) { }

  ngOnInit(): void {
  }

  getValues() {
    console.log(this.myform);

    this.usrService.submitContactDetails(this.myform.value)
      .subscribe((data) => {
        console.log(data)
      })

    // api back we need to place that call in service.

  }

}
