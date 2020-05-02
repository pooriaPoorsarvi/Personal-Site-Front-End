import { SignUpService, Email } from './../services/sign-up.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-section',
  templateUrl: './sign-up-section.component.html',
  styleUrls: ['./sign-up-section.component.scss']
})
export class SignUpSectionComponent implements OnInit {

  buttonActive = true;
  buttonOrginalText = 'Subscribe';
  buttonThanksText = 'Thank you';
  buttonErrorText = 'User already exists';
  buttonNotValidText = 'Email Not Valid';
  buttonText = this.buttonOrginalText;


  email = new FormControl('', [Validators.required, Validators.email]);


  constructor(private signUpService: SignUpService) { }

    ngOnInit(): void {}

  signUp(){
    if (this.buttonText !== this.buttonOrginalText){
      return;
    }

    if (!this.email.valid){
      this.temporarilyChangeButtonText(this.buttonOrginalText, this.buttonNotValidText, 2000);
      return;
    }


    this.buttonActive = false;
    this.signUpService.signUp(new Email(this.email.value)).subscribe(
      value => {
        this.buttonActive = true;
        console.log('Post successfully sent');
        console.log(value);
        this.temporarilyChangeButtonText(this.buttonOrginalText, this.buttonThanksText, 2000);
        this.email.setValue('');
      },
      err => {
        this.buttonActive = true;
        console.log('Post had an error');
        console.log(err);
        this.temporarilyChangeButtonText(this.buttonOrginalText, this.buttonErrorText, 2000);
      }
    );
  }

  temporarilyChangeButtonText(orgText: string, tempText: string, time: number){
    this.buttonText = tempText;
    setTimeout(
      () => {
        this.buttonText = orgText;
      }, time);
  }

}
