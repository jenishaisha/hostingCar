import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainContactComponent } from './main-contact/main-contact.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
   
    {
        path:'contact',
      component: MainContactComponent
    },
     {
        path: "**",
        redirectTo: '/home'
    },
];
