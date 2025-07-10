import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-contact',
  standalone: true,
  imports: [HeaderComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './main-contact.component.html',
  styleUrl: './main-contact.component.css'
})
export class MainContactComponent {

  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  message = '';
  submitted = false;
  onBookNow() {
    if (!this.firstName.trim()) {
      this.submitted = true;
      return;
    }

    const fullName = `${this.firstName.trim()} ${this.lastName.trim()}`;
    const extraNote = "This message was sent from the booking form on the website.";
    const msg = `New Booking – Siva Auto Care :\n\nName: ${fullName}\nEmail : ${this.email.trim()}\nPhone : +91 ${this.phone.trim()}\nMessage : ${this.message.trim() || 'N/A'}\n\n${extraNote}`;
    const whatsappUrl = `https://wa.me/919750250154?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');

    // Optional: Reset form
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.message = '';
  }

}
