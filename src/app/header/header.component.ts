import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { bootstrapList } from '@ng-icons/bootstrap-icons'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgIconsModule
  ],
  providers:[],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public isSidenavOpen = false;
  constructor(public router: Router){}

  scrollToTop(){
    window.scrollTo({top:0, behavior: 'instant'})
  }

  openSidenav(){
    this.isSidenavOpen = true;
  }

  closeSidenav(){
    this.isSidenavOpen = false;
  }
}

