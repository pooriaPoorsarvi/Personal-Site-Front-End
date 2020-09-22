import { NavScrolService } from './../nav-scrol.service';
import { PersonalInfoService } from './../services/personal-info.service';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit, AfterViewInit {

  @ViewChild('contacts') contacts: ElementRef;

  constructor(public personalInfoService: PersonalInfoService, private navScrolService: NavScrolService) { }


  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.navScrolService.addContacts(this.contacts);
  }

}
