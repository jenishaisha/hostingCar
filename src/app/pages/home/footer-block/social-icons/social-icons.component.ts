import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './social-icons.component.html',
  styleUrl: './social-icons.component.css'
})
export class SocialIconsComponent {

  @Input() iconName!: string;
}
