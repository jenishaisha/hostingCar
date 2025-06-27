import { Component } from '@angular/core';
import { HeaderComponent } from "../../../header/header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-block',
  standalone: true,
  imports: [HeaderComponent,RouterLink],
  templateUrl: './home-block.component.html',
  styleUrl: './home-block.component.css'
})
export class HomeBlockComponent {

}
