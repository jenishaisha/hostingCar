import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainContactComponent } from './main-contact/main-contact.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { MainAboutComponent } from '../main-about/main-about.component';
import { MainServicesComponent } from '../main-services/main-services.component';

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
        path:'about',
      component: MainAboutComponent
    },
    {
        path:'service',
      component: MainServicesComponent
    },
   
    {
        path:'blog',
      component: MainBlogComponent
    },
     {
        path: "**",
        redirectTo: '/home'
    },
];
