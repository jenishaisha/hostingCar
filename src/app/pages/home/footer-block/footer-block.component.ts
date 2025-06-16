import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NumberOnlyDirective } from '../../../shared/directive/number-only.directive';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@Component({
  selector: 'app-footer-block',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NumberOnlyDirective,
    SocialIconsComponent
  ],
  templateUrl: './footer-block.component.html',
  styleUrl: './footer-block.component.css'
})
export class FooterBlockComponent {
  numberForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.numberForm = this.fb.group({
      number: ['', [Validators.pattern(/^[0-9]*$/)]]
    });
  }

  onSubmit() {
    if (this.numberForm.valid) {
      console.log('Form submitted:', this.numberForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
