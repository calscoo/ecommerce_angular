import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'FooterOne',
    templateUrl: './FooterOne.component.html',
    styleUrls: ['./FooterOne.component.scss']
})
export class FooterOneComponent implements OnInit {
    date: Date = new Date();

    constructor() {
    }

    ngOnInit() {
    }

}
