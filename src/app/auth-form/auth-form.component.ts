import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.sass'
})
export class AuthFormComponent {
  oauthStep = 2;
  oauthForm = new FormGroup({
    email: new FormControl('ashikodiemeka@gmail.com'),
  });
  emailOauth() {
    this.oauthStep = 2;
  };
  restartAuth() {
    this.oauthStep = 1;
  }
}
