import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { ServiceComponent } from '../service/service.component';
import { WorksComponent } from '../works/works.component';
import { ChartComponent } from '../chart/chart.component';
import { PlanComponent } from '../plan/plan.component';
import { FaqComponent } from '../faq/faq.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PhoComponent } from '../pho/pho.component';
 
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent,MatIconModule,ServiceComponent,WorksComponent,ChartComponent,PlanComponent,FaqComponent,ContactComponent,FooterComponent,RouterLink,RouterLinkActive,PhoComponent ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
 toContac(){
  document.getElementById("con")?.scrollIntoView();
 }
 toPla(){
  document.getElementById("plan")?.scrollIntoView();
 }
}
