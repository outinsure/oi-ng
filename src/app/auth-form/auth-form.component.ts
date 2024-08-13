import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.sass'
})
export class AuthFormComponent {
  authStep = 3;
  authForm = new FormGroup({
    email: new FormControl('ashikodiemeka@gmail.com'),
  });
  nextAuthStep() {
    this.authStep++;
  };
  restartAuth() {
    this.authStep = 1;
  }
}
