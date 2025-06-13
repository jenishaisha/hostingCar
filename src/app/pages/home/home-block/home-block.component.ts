import { Component } from '@angular/core';
import { HeaderComponent } from "../../../header/header.component";

@Component({
  selector: 'app-home-block',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home-block.component.html',
  styleUrl: './home-block.component.css'
})
export class HomeBlockComponent {

}
