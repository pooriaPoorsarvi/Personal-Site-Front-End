import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

export class PersonalInfo{
  constructor(public phoneNumber: string, public address: string, public emailAddress: string){}
}

@Injectable()
export class PersonalInfoService{
  private personalLink = 'https://ec2-18-224-60-193.us-east-2.compute.amazonaws.com:443/phone-number';
  private subscription: Subscription;
  private personalInfo: PersonalInfo = new PersonalInfo('+1 (416) 807 9017', 'Toronto, On', 'pooria.poorsarvi.tehrani@mail.utoronto.ca');
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
        const h = new HttpHeaders();
        h.append('Access-Control-Allow-Origin', '*');
        this.http.get(this.personalLink, {headers : h}).subscribe(
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
