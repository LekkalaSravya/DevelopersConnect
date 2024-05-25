import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LogComponent } from '../log/log.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home-1',
  standalone: true,
  imports: [MatIconModule,RouterLink,LogComponent,RouterOutlet,RouterLinkActive,NavComponent],
  templateUrl: './home-1.component.html',
  styleUrl: './home-1.component.css'
})
export class Home1Component {

}
