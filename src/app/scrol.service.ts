import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';



@Injectable({providedIn: 'root'})
export class ScrolService{
  // TODO make this private
  public get heightChange(): Observable<number> { return this.scrolSubject.asObservable(); }

  private scrolSubject: Subject<number> = new Subject<number>();
  private initHeight: number = null;

  move(event){
    if (this.initHeight === null){
      this.initHeight = event.detail.startY;
    }
    this.scrolSubject.next(event.detail.currentY - this.initHeight);
  }
}
