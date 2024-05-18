import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule,RouterLink,RouterLinkActive,HomepageComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
toHome(){
  document.getElementById("home")?.scrollIntoView();
}
toService(){
  document.getElementById("ser")?.scrollIntoView();
}
toWorks(){
  document.getElementById("wor")?.scrollIntoView();
}
toPrice(){
  document.getElementById("plan")?.scrollIntoView();
}
toFaq(){
  document.getElementById("faq")?.scrollIntoView();
}
toContact(){
  document.getElementById("con")?.scrollIntoView();
}

}
