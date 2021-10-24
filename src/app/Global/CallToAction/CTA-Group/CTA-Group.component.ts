import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'embryo-CtaGroup',
    templateUrl: './CTA-Group.component.html',
    styleUrls: ['./CTA-Group.component.scss']
})
export class CTAGroupComponent implements OnInit {

    callToActionArray: any = [
        {
            img_path: 'assets/images/home2-slider-custom-1.png',
            route: '/products/gadgets/12'
        },
        {
            img_path: 'assets/images/home2-slider-custom-2.png',
            route: '/products/men/3'
        },
        {
            img_path: 'assets/images/home2-slider-custom-1.png',
            route: '/products/gadgets/11'
        },
        {
            img_path: 'assets/images/home2-slider-custom-2.png',
            route: '/products/men/5'
        },
        {
            img_path: 'assets/images/home2-slider-custom-1.png',
            route: '/products/gadgets/14'
        },
        {
            img_path: 'assets/images/home2-slider-custom-2.png',
            route: '/products/men/6'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
