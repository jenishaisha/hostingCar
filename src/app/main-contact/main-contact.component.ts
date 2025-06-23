import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-contact',
  standalone: true,
  imports: [HeaderComponent,
    CommonModule,
  ],
  templateUrl: './main-contact.component.html',
  styleUrl: './main-contact.component.css'
})
export class MainContactComponent {

}
