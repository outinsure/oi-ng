import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { LandingComponent } from './landing/landing.component';
import { AccountComponent } from './account/account.component';
import { AccountInfoComponent } from './account/account-info.component';
import { UpdateNameComponent } from './update-form/update-name.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'oi-auth', component: AuthFormComponent },
  { 
    path: 'account',
    component: AccountComponent, 
    children: [
      {
        path: '',
        title: 'Basic Info',
        component: AccountInfoComponent
      },
      {
        path: 'change-name',
        title: 'Update Name',
        component: UpdateNameComponent
      },
    ]
  },
];

@NgModule({})
export class AppRoutingModule { }
