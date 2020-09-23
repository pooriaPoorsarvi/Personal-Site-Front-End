import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';



@Injectable({providedIn: 'root'})
export class ScrolService{
  // TODO make this private
  public get heightChange(): Observable<number> { return this.scrolSubject.asObservable(); }

  public get deltaY(): Observable<number> { return this.deltaYSubject.asObservable(); }

  private scrolSubject: Subject<number> = new Subject<number>();
  private deltaYSubject: Subject<number> = new Subject<number>();
  private initHeight: number = null;

  move(event){
    if (this.initHeight === null){
      this.initHeight = event.detail.startY;
    }
    this.scrolSubject.next(event.detail.currentY - this.initHeight);
    this.deltaYSubject.next(event.detail.deltaY);
  }

}
