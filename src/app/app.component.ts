import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterBlockComponent } from './pages/home/footer-block/footer-block.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterBlockComponent,
    PopUpComponent,
    MatCheckboxModule,
    FormsModule,CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title = 'carServiceV2';
popUpShow=false

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Run this only in the browser
      setTimeout(() => {
        this.popUpShow = true;
        document.body.style.overflow = 'hidden'; // disable scroll
      }, 10000);
    }
  }
  onClosePopup() {
    this.popUpShow = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = ''; // restore scroll
    }
  }

}


