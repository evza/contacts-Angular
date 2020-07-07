import { Component, OnInit } from '@angular/core';
import { OrganizerService } from '../organizer.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  constructor(public organizerService: OrganizerService) { }

  ngOnInit() {
  }

  onChange(id: number): void {
    this.organizerService.toggle(id);
  }

  delContact(id: number): void {
    this.organizerService.remove(id);
  }

}


