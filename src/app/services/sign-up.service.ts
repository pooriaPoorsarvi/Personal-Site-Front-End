import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Email{
  constructor(public email: string){}
}


@Injectable()
export class SignUpService{

  constructor(private httpClient: HttpClient){}

  signUp(email: Email): Observable<any>{
    const h = new HttpHeaders();
    h.append('Access-Control-Allow-Origin', '*');
    return this.httpClient.post(environment.apiUrl + environment.routes['sign-up'].address, email
    , {headers: h});
  }



}





