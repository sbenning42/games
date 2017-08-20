import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/body/home/home.component';
import { LogoutComponent } from './components/body/logout/logout.component';
import { SettingsComponent } from './components/body/settings/settings.component';
import { RegisterComponent } from './components/body/register/register.component';
import { LoginComponent } from './components/body/login/login.component';
import { MatchmackingFormComponent } from './components/body/matchmacking-form/matchmacking-form.component';
import { MatchComponent } from './components/body/match/match.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'matchmacking-form', component: MatchmackingFormComponent },
  { path: 'match', component: MatchComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
