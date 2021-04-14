import { Observable, Subject } from 'rxjs';
import { Injectable } from "@angular/core";

export interface SampleInterface{
  title: string;
  description: string;
  imageSrc: string;
  urlLink: string;
}


@Injectable({providedIn: 'root'})
export class SamplesService{

  private _samples: SampleInterface[] = [

    // {
    //   title: 'Ecommerce Website and APP',
    //   description: 'Made ecommerce website using AWS, Angular, Ionic, Java Spring boot.',
    //   imageSrc: 'assets/Commerce.png',
    //   urlLink: 'http://commerce-front-end-travis.s3-website.us-east-2.amazonaws.com/main/tabs/discover'
    // },

    {
      title: 'Personal Website',
      description: 'Made personal website using AWS, Angular, Ionic, Java Spring boot.',
      imageSrc: 'assets/Portfolio.png',
      urlLink: ''
    },

    {
      title: 'Paper collection website',
      description: 'Made a sample of how to show a collection of papers using AWS, Angular, Ionic.',
      imageSrc: 'assets/T2S.png',
      urlLink: 'http://ppt-t2s.s3-website.us-east-2.amazonaws.com/home/tabs/examples'
    },


  ];



  private _samplesStream: Subject<SampleInterface[]> = new Subject<SampleInterface[]>();

  public get samplesStream(): Observable<SampleInterface[]>  {return this._samplesStream.asObservable(); }
  public get samples(): SampleInterface[]  {return this._samples; }


  constructor(){
    this._samplesStream.next(this._samples);
  }


}




