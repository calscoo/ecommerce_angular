import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {EmbryoService} from '../../Services/Embryo.service';

@Component({
    selector: 'embryo-ShopDetails',
    templateUrl: './ShopDetails.component.html',
    styleUrls: ['./ShopDetails.component.scss']
})
export class ShopDetailsComponent implements OnInit, OnChanges {

    @Input() detailData: any;
    @Input() currency: string;

    mainImgPath: string;
    totalPrice: any;
    productReviews: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                public embryoService: EmbryoService
    ) {
        this.embryoService.getProductReviews().valueChanges().subscribe(res => {
            this.productReviews = res;
        });
    }

    ngOnInit() {
        this.mainImgPath = this.detailData.image;
        this.totalPrice = this.detailData.price;
    }

    ngOnChanges() {
        this.mainImgPath = null;
        this.totalPrice = null;
        this.mainImgPath = this.detailData.image;
        this.totalPrice = this.detailData.price;
    }

    /**
     * getImagePath is used to change the image path on click event.
     */
    public getImagePath(imgPath: string, index: number) {
        document.querySelector('.border-active').classList.remove('border-active');
        this.mainImgPath = imgPath;
        document.getElementById(index + '_img').className += ' border-active';
    }

    public purchase(url: any) {
        window.location.href = url;
    }

}
