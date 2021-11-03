import {Component, OnInit} from '@angular/core';
import {AdminPanelServiceService} from '../../Service/AdminPanelService.service';
import {EmbryoService} from '../../../Services/Embryo.service';

@Component({
    selector: 'app-header-component',
    templateUrl: './Header.component.html',
    styleUrls: ['./Header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
    mini: any;

    constructor(private coreService: AdminPanelServiceService,
                public embryoService: EmbryoService) {
        this.mini = 'mini';
    }

    ngOnInit() {
    }

    /**
     * toggleSidebar method is used a toggle a side nav bar.
     */
    toggleSidebar() {
        this.coreService.sidenavOpen = !this.coreService.sidenavOpen;
    }

    public selectedLanguage(value) {
        this.embryoService.language = value;
    }

}
