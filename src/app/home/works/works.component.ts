import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PhoComponent } from '../pho/pho.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [MatIconModule,RouterLink,RouterOutlet,RouterLinkActive,PhoComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

}
