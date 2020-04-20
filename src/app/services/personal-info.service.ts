import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

export class PersonalInfo{
  constructor(public phoneNumber: string, public address: string, public emailAddress: string){}
}

@Injectable()
export class PersonalInfoService{

  private personalLink = 'http://ec2-18-224-60-193.us-east-2.compute.amazonaws.com/phone-number';
  private subscription: Subscription;
  private personalInfo: PersonalInfo = new PersonalInfo('', '', '');
  constructor(private http: HttpClient){
    this.setPersonalInfo();
  }

  private setPersonalInfo(){
    const time = interval(1000);
    this.subscription = time.subscribe(
      value => {
        if ((this.personalInfo.address !== '') && (this.personalInfo.emailAddress !== '') && (this.personalInfo.phoneNumber !== '')){
          this.subscription.unsubscribe();
        }
        this.http.get(this.personalLink).subscribe(
          newPersonalInfo => {
            if (!typeof(newPersonalInfo).isPrototypeOf(PersonalInfo)){
              console.log('recived data is not personal infor.');
              console.log(newPersonalInfo);
              console.log(typeof(newPersonalInfo));
            }
            this.personalInfo = newPersonalInfo as PersonalInfo;
          },
          err => {
            console.log('Error Occurred on retrieving personal info.')
          }
        );
      },
      err => {
        console.log('error occured in constructing the interval for getting the personal info.');
      }
    );
  }

  public getPersonalInfo(){
    return new PersonalInfo(this.personalInfo.phoneNumber, this.personalInfo.address, this.personalInfo.emailAddress);
  }



}
