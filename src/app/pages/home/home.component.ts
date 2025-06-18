import { Component } from '@angular/core';
import { HomeBlockComponent } from "./home-block/home-block.component";
import { FooterBlockComponent } from './footer-block/footer-block.component';
import { BlogBlockComponent } from "./blog-block/blog-block.component";
import { AboutUsComponent } from '../../about-us/about-us.component';
import { ServiceComponent } from '../../../service/service.component';
import { ContactComponent } from "./contact/contact.component";
import { BrandsComponent } from "./brands/brands.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeBlockComponent,
    FooterBlockComponent, BlogBlockComponent, AboutUsComponent, ServiceComponent, ContactComponent, BrandsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
