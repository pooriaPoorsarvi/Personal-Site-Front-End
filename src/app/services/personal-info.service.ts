import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

export class PersonalInfo{
  constructor(public phoneNumber: string, public address: string, public emailAddress: string){}
}

@Injectable()
export class PersonalInfoService{
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
        const h = new HttpHeaders();
        h.append('Access-Control-Allow-Origin', '*');
        this.http.get(environment.apiUrl + '/phone-number', {headers : h}).subscribe(
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
