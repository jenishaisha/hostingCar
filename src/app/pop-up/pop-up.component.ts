import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {

  services = [
    { name: 'General Service', selected: false },
    { name: 'Brake', selected: false },
    { name: 'AC service', selected: false },
    { name: 'Clutch', selected: false },
    { name: 'Suspension', selected: false },
    { name: 'Electrical checkup', selected: false },
    { name: 'Alignment Balancing', selected: false },
    { name: 'Water Wash', selected: false },
    { name: 'Tingering Painting', selected: false }
  ];

  @Output() closePopup = new EventEmitter<void>();

  onClose() {
    this.closePopup.emit();
  }
  name: string = '';
  phone: string = '';
  carBrand: string = '';
  submitted = false;
  onSubmit() {

    this.submitted = true;
    if (!this.phone.trim() || !this.name.trim() || !this.carBrand.trim()) {
      return;
    }

    const selectedServices = this.services
      .filter(service => service.selected)
      .map(service => service.name)
      .join(', ');
    const formattedPhone = `+91 ${this.phone.trim()}`;
    const message = `New Car Service Request :\n\nName : ${this.name.trim()}\nPhone : ${formattedPhone}\nCar Brand : ${this.carBrand.trim()}\nServices : ${selectedServices || 'None selected'}`;
    const whatsappUrl = `https://wa.me/919750250154?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    this.name = '';
    this.phone = '';
    this.carBrand = '';
    this.services.forEach(service => service.selected = false);
    this.submitted = false;
  }


}
