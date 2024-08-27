import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'group-new',
    templateUrl: './group-new.component.html',
    standalone: true,
    imports: [RouterLink]
})
export class GroupNewComponent {
    tabIndex = 1
    postGroupName = () => {
        this.tabIndex = 1;
    }
    sendMembersInvite = () => {
        this.tabIndex = 2;
    }
}