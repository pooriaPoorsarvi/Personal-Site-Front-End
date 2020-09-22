import { Subject } from 'rxjs';
import { ElementRef, Injectable } from '@angular/core';



@Injectable()
export class NavScrolService{
  private projects: ElementRef = null;
  private contacts: ElementRef = null;
  projSub = new Subject<ElementRef>();
  addProjects(projects: ElementRef){
    this.projects = projects;
    this.projSub.next(this.projects);
  }
  // TODO make this process stream lined and move the router move to hear as well
  moveToProjects(){
    if (this.projects !== null){
      this.moveProj();
    }else{
      this.projSub.subscribe(
        _ => {
          this.moveProj();
        }
      );
    }
  }
  private moveProj(){
    this.projects.nativeElement.scrollIntoView(
      {behavior: "smooth", block: "start", inline: "nearest"}
    );
  }

  addContacts(contacts: ElementRef){
    this.contacts = contacts;
    console.log('setging contacts');
    console.log(this.contacts);
  }
  moveToContacts(){
    this.contacts.nativeElement.scrollIntoView(
      {behavior: "smooth", block: "start", inline: "nearest"}
    );
  }


}

