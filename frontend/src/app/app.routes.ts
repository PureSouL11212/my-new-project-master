import { Routes } from '@angular/router';
import { TopnavbarComponent } from './folder/topnavbar/topnavbar.component';
import { SecondnavbarComponent } from './folder/secondnavbar/secondnavbar.component';
import { BodyComponent } from './folder/body/body.component';
import { Home1Component } from './home1/home1.component';
import { HomeAComponent } from './navfolder/home-a/home-a.component';
import { BookingComponent } from './navfolder/booking/booking.component';
import { ProfileComponent } from './folder/profile/profile.component';
import { LoginpageComponent } from './folder/loginpage/loginpage.component';
import { BillingComponent } from './navfolder/billing/billing.component';
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: 'login', loadComponent: () => import('./folder/loginpage/loginpage.component').then(c => c.LoginpageComponent) },
    { path: 'login', loadComponent: () => import('./folder/topnavbar/topnavbar.component').then(c => c.TopnavbarComponent) },
    { path: 'profile', component:ProfileComponent},
    { path: 'loginpage', component:LoginpageComponent},
    { path: 'Topnavbar', component: TopnavbarComponent },
    { path: 'second', component: SecondnavbarComponent },
    { path: 'body', component: BodyComponent },
    { path: 'home1', component: Home1Component },
    { path: 'homea', component: HomeAComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'billing', component:BillingComponent },
];
