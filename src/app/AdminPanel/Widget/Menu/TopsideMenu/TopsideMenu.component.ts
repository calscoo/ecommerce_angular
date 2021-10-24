import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'TopsideMenu',
    templateUrl: './TopsideMenu.component.html',
    styleUrls: ['./TopsideMenu.component.scss']
})
export class TopsideMenuComponent implements OnInit {

    @Output() isCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() isShowSpinner: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    /**
     * Reload the component.
     */
    showSpinner() {
        this.isShowSpinner.emit(true);
    }

    /**
     * close the component.
     */
    onClose() {
        this.isCloseEvent.emit(true);
    }

}
