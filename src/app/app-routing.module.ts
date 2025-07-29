import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { LandingComponent } from './landing/landing.component';
import { DiscountComponent } from './discount/discount.component';
import { AccountComponent } from './account/account.component';
import { AccountInfoComponent } from './account/account-info.component';
import { UpdateNameComponent } from './update-form/update-name.component';
import { UpdateNumberComponent } from './update-form/update-number.component';
import { UpdateEmailComponent } from './update-form/update-email.component';
import { UpdatePasswordComponent } from './update-form/update-password.component';
import { AccountGroupsComponent } from './account/account-groups.component';
import { GroupNewComponent } from './groups/group-new.component';

export const routes: Routes = [
  { path: '', component: DiscountComponent },
  { path: 'landing', component: LandingComponent },
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
        component: UpdateNameComponent,
      },
      {
        path: 'change-number',
        title: 'Update Number',
        component: UpdateNumberComponent
      },
      {
        path: 'change-email',
        title: 'Update Email',
        component: UpdateEmailComponent
      },
      {
        path: 'change-password',
        title: 'Update Password',
        component: UpdatePasswordComponent
      },
      {
        path: 'groups',
        children: [
          {
            path: '',
            title: 'Manage Groups',
            component: AccountGroupsComponent
          },
          {
            path: 'new',
            title: 'Create group',
            component: GroupNewComponent
          }
        ]
      }
    ]
  },
];

@NgModule({})
export class AppRoutingModule { }
