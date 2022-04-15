import {Component, OnInit} from '@angular/core';
import {EmbryoService} from '../../../Services/Embryo.service';

@Component({
    selector: 'HeaderTwo',
    templateUrl: './HeaderTwo.component.html',
    styleUrls: ['./HeaderTwo.component.scss']
})
export class HeaderTwoComponent implements OnInit {

    popupResponse: any;
    right: any;
    mini: any;

    constructor(public embryoService: EmbryoService) {
        this.right = 'rtl';
        this.mini = 'mini';
    }

    ngOnInit() {
    }

    public toggleSearch() {
        document.querySelector('app-main').classList.toggle('form-open');
    }

    public toggleSidebar() {
        this.embryoService.sidenavOpen = !this.embryoService.sidenavOpen;
    }

    public getPopupResponse(response: any, value: any, type) {
        if (response) {
            if (type == 'cart') {
                this.embryoService.removeLocalCartProduct(value);
            } else {
                this.embryoService.removeLocalWishlistProduct(value);
            }
        }
    }

    public addAllWishlistToCart(values: any) {
        this.embryoService.addAllWishListToCart(values);
    }

    public selectedCurrency(value) {
        this.embryoService.currency = value;
    }

    public selectedLanguage(value) {
        this.embryoService.language = value;
    }

    public addToCart(value) {
        this.embryoService.addToCart(value, 'wishlist');
    }

}
