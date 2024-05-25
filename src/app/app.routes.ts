import { Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ServiceComponent } from './home/service/service.component';
import { WorksComponent } from './home/works/works.component';
import { PhoComponent } from './home/pho/pho.component';
import { PaymentComponent } from './home/payment/payment.component';
import { LogComponent } from './home/log/log.component';
import { SignupComponent } from './home/signup/signup.component';
import { Home1Component } from './home/home-1/home-1.component';

export const routes: Routes = [
    {path:"home",component:HomepageComponent},
   
    {path:"servi",component:ServiceComponent},
    {path:"work",component:WorksComponent},
    {path:"pho",component:PhoComponent},
    {path:"pay",component:PaymentComponent},
    {path:'log',component:LogComponent},
    {path:'signup',component:SignupComponent},
    {path:"",component:Home1Component}
];
