import { Component } from '@angular/core';
import { HomepageComponent } from '../home/homepage/homepage.component';
  
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ HomepageComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
toHome(){
  document.getElementById("home")?.scrollIntoView();
}
toService(){
  document.getElementById("ser")?.scrollIntoView();
}
toWork(){
  document.getElementById("wor")?.scrollIntoView();
}
toPlan(){
  document.getElementById("plan")?.scrollIntoView();
}
toFaq(){
  document.getElementById("faq")?.scrollIntoView();
}
toContact(){
  document.getElementById("con")?.scrollIntoView();
}
}
