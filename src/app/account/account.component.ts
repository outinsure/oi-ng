import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class AccountComponent {

}