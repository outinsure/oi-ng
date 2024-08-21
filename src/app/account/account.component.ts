import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class AccountComponent {
    currentUrl = '';
    isChildUrl = false;

    constructor(private router: Router) {
        this.router.events.subscribe(() => {
            this.isChildUrl = /change\-/.test(this.router.url);
        });
    }
}