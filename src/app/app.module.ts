import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { provideRouter, RouterLink, RouterLinkActive, RouterOutlet, withComponentInputBinding } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, AuthFormComponent
  ],
  imports: [
    CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [provideRouter(routes, withComponentInputBinding())],
  bootstrap: [AppComponent]
})
export class AppModule { }
