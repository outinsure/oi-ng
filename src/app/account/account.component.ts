import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideRouter, RouterLink, RouterLinkActive, RouterOutlet, withComponentInputBinding } from "@angular/router";
import { AppRoutingModule, routes } from "../app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    standalone: true,
    imports: [RouterOutlet],
})
export class AccountComponent {

}