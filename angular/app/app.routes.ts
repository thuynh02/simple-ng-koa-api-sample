import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent }               from './home.component';
import { PingComponent }               from './ping.component';
import { RegisterComponent }               from './register.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent},
  { path: 'ping', component: PingComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: '' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
