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
  constructor(private fb: FormBuilder) {
    this.numberForm = this.fb.group({
      number: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]]
    });

  }


  onSubmit() {
    if (this.numberForm.valid) {
      const enteredNumber = this.numberForm.value.number;
      const formattedNumber = `+91 ${enteredNumber}`;
      const recipientNumber = '919677130471'; 

      const message = `New service inquiry from customer : ${formattedNumber}`;
      const whatsappUrl = `https://wa.me/${recipientNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank');
    } else {
      console.log('Form is invalid');
    }
  }

}
