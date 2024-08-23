import { Component } from "@angular/core";

@Component({
    selector: 'account-groups',
    templateUrl: './account-groups.component.html',
})
export class AccountGroupsComponent {
    groups = [
        {
            name: 'I and Spouse',
            ownerName: '',
            ownerId: '1',
            size: 10,
            createdAt: 'August 22'
        },
        {
            name: 'Church Choir',
            ownerName: '',
            ownerId: '1',
            size: 5,
            createdAt: 'May 31'
        },
        {
            name: 'School hommies',
            ownerName: '',
            ownerId: '2',
            size: 9,
            createdAt: 'June 19'
        },
        {
            name: 'Boys Night Out',
            ownerName: '',
            ownerId: '2',
            size: 5,
            createdAt: 'November 04'
        },
        {
            name: 'Tech group',
            ownerName: '',
            ownerId: '3',
            size: 3,
            createdAt: 'December 19'
        },
        {
            name: 'Work colleagues',
            ownerName: '',
            ownerId: '3',
            size: 2,
            createdAt: 'July 01'
        },
        {
            name: 'Soccer team',
            ownerName: '',
            ownerId: '4',
            size: 5,
            createdAt: 'September 15'
        },
    ]
}