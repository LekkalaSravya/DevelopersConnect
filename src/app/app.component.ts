import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ServiceComponent } from './home/service/service.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { WorksComponent } from './home/works/works.component';
import { ChartComponent } from './home/chart/chart.component';
import { PlanComponent } from './home/plan/plan.component';
import { FaqComponent } from './home/faq/faq.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PhoComponent } from './home/pho/pho.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HomepageComponent,ServiceComponent,NavbarComponent,MatIconModule,WorksComponent,ChartComponent,PlanComponent,FaqComponent,ContactComponent,FooterComponent,PhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'design';

}
