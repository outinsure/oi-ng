import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'group-new',
    templateUrl: './group-new.component.html',
    standalone: true,
    imports: [RouterLink]
})
export class GroupNewComponent {
    selectedPlan: string = 'squad_lite'
    tabIndex = 0
    postGroupName = () => {
        this.tabIndex = 1;
    }
    sendMembersInvite = () => {
        this.tabIndex = 2;
    }
    goToStep(number: number) {
        this.tabIndex = number;
    }
    selectPlan(plan: string) {
        this.selectedPlan = plan;
    }
}