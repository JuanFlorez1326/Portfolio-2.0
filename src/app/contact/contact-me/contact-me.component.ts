import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  public information: { icon: string, title: string, content: string }[] = [
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      content: "juanks339@gmail.com"
    },
    {
      icon: "fa-solid fa-phone",
      title: "Number",
      content: "+57 313 706 6248"
    },
    {
      icon: "fa-solid fa-location-dot",
      title: "Location",
      content: "Colombia - Quindio"
    },
    {
      icon: "fa-brands fa-linkedin",
      title: "LinkedIn",
      content: "linkedin.com/in/juanflorez1326"
    }
  ]
}