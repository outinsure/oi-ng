import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html'
})
export class AuthFormComponent {
  constructor(private router: Router) {}
  isTyping = false;
  authStep = 3;
  authForm = new FormGroup({
    email: new FormControl('', { validators: [Validators.required, Validators.email]}),
  });
  otpForm = new FormGroup({
    otp1: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
    otp2: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
    otp3: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
    otp4: new FormControl('', [Validators.required, Validators.pattern('[0-9]')])
  });
  submitOTP() {
    if (this.otpForm.valid) {
      this.authStep++;
    } else {
      this.otpForm.markAsDirty();
    }
  }
  nextAuthStep() {
    if (this.authForm.valid) {
      this.authStep++;
    } else {
      this.authForm.markAsDirty();
    }
  };
  restartAuth() {
    this.authStep = 1;
  };
  completeAuth() {
    this.router.navigate(['account']);
  }
  updateInput () {
    this.isTyping = true;
    // Reset typing state after a small delay
    setTimeout(() => {
      this.isTyping = false;
    }, 300);
  }
  // Method to move to the next input
  moveFocus(currentInput: HTMLInputElement, nextInput: HTMLInputElement | null) {
    if (currentInput.value.length === 1) {
      if (!/^\d?$/.test(currentInput.value)) {
        currentInput.value = '';
        return;
      }
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  // Method to handle backspace and move focus to previous input
  moveBack(currentInput: HTMLInputElement, prevInput: HTMLInputElement | null) {
    if (currentInput.value.length === 0 && prevInput) {
      prevInput.focus();
    }
  }
}
