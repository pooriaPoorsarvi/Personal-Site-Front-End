import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class BlogEntity{
  public id: number;
  public title: string;
  public intro: string;
  public imageSrc: string;
  public markDown: string;
}

@Injectable()
export class BlogService{

  constructor(private httpClient: HttpClient){}

  getByID(id: number): Observable<BlogEntity>{
    const h = new HttpHeaders();
    h.append('Access-Control-Allow-Origin', '*');
    return this.httpClient.get('http://accessedportfolio-env.eba-4vsyc2gh.us-east-2.elasticbeanstalk.com/blog-posts/2'
    , {headers : h}) as Observable<BlogEntity>;
  }


  getAll(): Observable<BlogEntity[]>{
    const h = new HttpHeaders();
    h.append('Access-Control-Allow-Origin', '*');
    return this.httpClient.get('http://accessedportfolio-env.eba-4vsyc2gh.us-east-2.elasticbeanstalk.com/blog-posts'
    , {headers : h}) as Observable<BlogEntity[]>;
  }

}


