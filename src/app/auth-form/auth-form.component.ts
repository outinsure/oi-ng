import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html'
})
export class AuthFormComponent {
  constructor(private router: Router) {}
  authStep = 1;
  authForm = new FormGroup({
    email: new FormControl('ashikodiemeka@gmail.com'),
  });
  nextAuthStep() {
    this.authStep++;
  };
  restartAuth() {
    this.authStep = 1;
  };
  completeAuth() {
    this.router.navigate(['account']);
  }
}
