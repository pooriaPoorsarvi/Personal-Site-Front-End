import { SignUpService, Email } from './../services/sign-up.service';
import { Component, OnInit } from '@angular/core';
import { uptime } from 'os';

@Component({
  selector: 'app-sign-up-section',
  templateUrl: './sign-up-section.component.html',
  styleUrls: ['./sign-up-section.component.scss']
})
export class SignUpSectionComponent implements OnInit {

  constructor(private signUpService: SignUpService) { }

  ngOnInit(): void {
  }

  signUp(){
    this.signUpService.signUp(new Email('pooriapoorsarvi@gmail.com')).subscribe(
      value => {
        console.log('Post successfully sent');
        console.log(value);
      },
      err => {
        console.log('Post had an error');
        console.log(err);
      }
    );
  }

}
