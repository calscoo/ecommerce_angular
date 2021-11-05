import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'embryo-HeaderUserProfileDropdown',
    templateUrl: './HeaderUserProfileDropdown.component.html',
    styleUrls: ['./HeaderUserProfileDropdown.component.scss']
})
export class HeaderUserProfileDropdownComponent implements OnInit {

    @Input() admin: boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
