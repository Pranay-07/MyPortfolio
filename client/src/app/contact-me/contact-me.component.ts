import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  
  @ViewChild('emailFormControl')
  emailFormControl!: ElementRef;

  @ViewChild('firstNameFormControl')
  firstNameFormControl!: ElementRef;
  
  @ViewChild('secondNameFormControl')
  secondNameFormControl!: ElementRef;
  
  @ViewChild('contactFormControl')
  contactFormControl!: ElementRef;
  
  @ViewChild('subjectFormControl')
  subjectFormControl!: ElementRef;
  
  constructor(public http:HttpService) { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  register() {
    let user = {
      firstName: this.firstNameFormControl?.nativeElement.value,
      lastName: this.secondNameFormControl.nativeElement.value,
      email: this.emailFormControl.nativeElement.value,
      Contact:this.contactFormControl.nativeElement.value,
      Subject :this.subjectFormControl.nativeElement.value
    }
    console.log(user)
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe( data => {
      let res:any = data; 
      console.log(
      `${user.firstName} is successfully register and mail has been sent and the message id is ${res.messageId}`
      );
    },
    err => {
      console.log(err);
    },() => {
    })
  }
}
