import { Component } from "@angular/core";
import { GetInitialsPipe } from "../get-initials.pipe";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
    selector: 'account-groups',
    templateUrl: './account-groups.component.html',
    standalone: true,
    imports: [GetInitialsPipe, RouterLink, RouterLinkActive, RouterOutlet]
})
export class AccountGroupsComponent {
    currentUser = 2;
    apiResponse = [
        {
            name: 'I and Spouse',
            groupId: 1,
            ownerId: 1,
            size: 10,
            active: false,
            createdAt: 'August 22'
        },
        {
            name: 'Church Choir',
            groupId: 2,
            ownerId: 1,
            size: 5,
            active: true,
            createdAt: 'May 31'
        },
        {
            name: 'School hommies',
            groupId: 3,
            ownerId: 2,
            size: 9,
            active: true,
            createdAt: 'June 19'
        },
        {
            name: 'Boys Night Out',
            groupId: 4,
            ownerId: 2,
            size: 5,
            active: true,
            createdAt: 'November 04'
        },
        {
            name: 'Tech group',
            groupId: 5,
            ownerId: 3,
            size: 3,
            active: true,
            createdAt: 'December 19'
        },
        {
            name: 'Work colleagues',
            groupId: 6,
            ownerId: 3,
            size: 2,
            active: false,
            createdAt: 'July 01'
        },
        {
            name: 'Soccer team',
            groupId: 7,
            ownerId: 4,
            size: 5,
            active: true,
            createdAt: 'September 15'
        },
    ];
    showOwnerList = (event: Event) => {
        const toggle = event.target as HTMLInputElement;
        const showOwnerList = toggle.checked;
        if (showOwnerList) {
            this.groups = this.apiResponse.filter((group) => group.ownerId == this.currentUser);
        } else {
            this.groups = this.apiResponse;
        }
    }
    searchGroups = (event: Event) => {
        const input = event.target as HTMLInputElement;
        const searchValue = input.value;
        console.log(searchValue)
        if (searchValue) {
            this.groups = this.apiResponse.filter((group) => group.name.toLowerCase().includes(searchValue.toLowerCase()))
        } else {
            this.groups = this.apiResponse;
        }
    }
    groups = this.apiResponse
}