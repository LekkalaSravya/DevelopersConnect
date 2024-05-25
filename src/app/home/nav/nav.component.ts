import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LogComponent } from '../log/log.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatIconModule,LogComponent,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
