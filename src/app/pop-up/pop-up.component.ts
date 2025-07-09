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

}
