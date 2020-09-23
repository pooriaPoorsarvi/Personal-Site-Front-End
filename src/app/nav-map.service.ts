import { Subject } from 'rxjs';
import { ElementRef, Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class NavMapService{

  private dictOfElements = {};
  private dictOfSubjects = {};
  private servicesSubjects = new Subject<string>();

  constructor() {}

  exists(dict: {}, name: string){
    return typeof(dict[name]) !== 'undefined';
  }

  addToMapping(serviceName: string, element: ElementRef){
    this.dictOfElements[serviceName] = element;
    if (! this.exists(this.dictOfSubjects, serviceName)){
      this.dictOfSubjects[serviceName] = new Subject<ElementRef>();
      this.servicesSubjects.next(serviceName);
    }
    this.dictOfSubjects[serviceName].next(this.dictOfElements[serviceName]);
  }

  deletMapping(serviceName: string){
    delete(this.dictOfElements[serviceName]);
  }

  goToMapping(serviceName: string){
    if (this.exists(this.dictOfElements, serviceName)) {
      this.moveToWhenReady(this.dictOfElements[serviceName]);
    }else{
      if (this.exists(this.dictOfSubjects, serviceName)){
        this.dictOfSubjects[serviceName].subscribe(
          _ => {
            this.moveToWhenReady(this.dictOfElements[serviceName]);
          }
        );
      }else{
        this.servicesSubjects.subscribe(
          serviceNameNew => {
            // The second part of the exist is because this is multi threaded
            if (serviceNameNew === serviceName || this.exists(this.dictOfSubjects, serviceName)) {
              this.moveToWhenReady(this.dictOfElements[serviceName]);
            }
          }
        );
      }
    }
  }

  private moveToWhenReady(element: ElementRef){
    element.nativeElement.scrollIntoView(
      {behavior: "smooth", block: "start", inline: "start"}
    );
  }






}





