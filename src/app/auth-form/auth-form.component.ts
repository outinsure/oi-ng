import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.sass'
})
export class AuthFormComponent {
  oauthForm = new FormGroup({
    email: new FormControl(''),
  });
  emailOauth() {
    console.log(this.oauthForm);
  }
}
