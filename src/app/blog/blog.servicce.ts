import { BlogData } from './blog.data';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class BlogEntity{
  public id: number;
  public title: string;
  public intro: string;
  public imageSrc: string;
  public markDownSrc: string;
}

@Injectable()
export class BlogService{


  constructor(
    private httpClient: HttpClient,
    private blogData: BlogData
  ){}

  getByID(id: string): Observable<BlogEntity>{
    // const h = new HttpHeaders();
    // h.append('Access-Control-Allow-Origin', '*');
    // return this.httpClient.get(environment.apiUrl  + '/blog-posts/' + id
    // , {headers : h}) as Observable<BlogEntity>;

    setTimeout(
      () => {
        this.blogData.getBlogPost(parseInt(id));
      }
    ,100);
    return this.blogData.blogPostObservable;
  }


  getAll(): Observable<BlogEntity[]>{
    // const h = new HttpHeaders();
    // h.append('Access-Control-Allow-Origin', '*');
    // return this.httpClient.get(environment.apiUrl + '/blog-posts'
    // , {headers : h}) as Observable<BlogEntity[]>;

    setTimeout(
      () => {
        this.blogData.getBlogPosts();
      }
    ,100);
    return this.blogData.blogPostsObservable;
  }

}


