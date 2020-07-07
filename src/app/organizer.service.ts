import { Injectable } from '@angular/core';

export class Contact {
  id: number;
  title: string;
  completed: boolean;
  phone: any;
}

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  contacts: Contact[] = [
    {id: 1, title: 'Ваня', completed: false, phone: '+38(022)222-22-22'},
    {id: 2, title: 'Катя', completed: false, phone: '+38(033)333-33-33'},
    {id: 3, title: 'Петя', completed: false, phone: '+38(044)444-44-44'},
    {id: 4, title: 'Даша', completed: false, phone: '+38(055)555-55-55'},
    {id: 5, title: 'Мама', completed: false, phone: '+38(066)666-66-66'},
    {id: 6, title: 'Папа', completed: false, phone: '+38(077)777-77-77'}
  ];

  constructor() { }

  toggle(id: number): void {
    const k = this.contacts.findIndex(t => t.id === id);
    this.contacts[k].completed = !this.contacts[k].completed;
  }

  remove(id: number): void {
    this.contacts = this.contacts.filter(t => t.id !== id);
  }
}
