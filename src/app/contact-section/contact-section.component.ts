import { NavMapService } from './../nav-map.service';
import { NavScrolService } from './../nav-scrol.service';
import { PersonalInfoService } from './../services/personal-info.service';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit, AfterViewInit, OnDestroy {

  public static get mapping() {return 'ContactSectionComponent'; }
  @ViewChild('contacts') contacts: ElementRef;

  constructor(
    public personalInfoService: PersonalInfoService,
    private navScrolService: NavScrolService,
    private navMapService: NavMapService
  ) { }


  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.navScrolService.addContacts(this.contacts);
    this.navMapService.addToMapping(ContactSectionComponent.mapping, this.contacts);
  }

  ngOnDestroy(){
    this.navMapService.deletMapping(ContactSectionComponent.mapping);
  }

}
