import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'embryo-AppLogo',
    templateUrl: './AppLogo.component.html',
    styleUrls: ['./AppLogo.component.scss']
})
export class AppLogoComponent implements OnInit {

    @Input() lightmode = false;

    constructor() {
    }

    ngOnInit() {
    }

}
