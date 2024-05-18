import { Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ServiceComponent } from './home/service/service.component';
import { WorksComponent } from './home/works/works.component';
import { PhoComponent } from './home/pho/pho.component';

export const routes: Routes = [
    {path:"home",component:HomepageComponent},
    {path:"servi",component:ServiceComponent},
    {path:"work",component:WorksComponent},
    {path:"pho",component:PhoComponent}
];
