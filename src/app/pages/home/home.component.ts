import { Component } from '@angular/core';
import { HomeBlockComponent } from "./home-block/home-block.component";
import { FooterBlockComponent } from './footer-block/footer-block.component';
import { BlogBlockComponent } from "./blog-block/blog-block.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeBlockComponent,
    FooterBlockComponent, BlogBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
