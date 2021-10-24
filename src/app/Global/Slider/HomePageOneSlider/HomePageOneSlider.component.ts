import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'embryo-HomePageOneSlider',
    templateUrl: './HomePageOneSlider.component.html',
    styleUrls: ['./HomePageOneSlider.component.scss']
})
export class HomePageOneSliderComponent implements OnInit, OnChanges {

    @Input() isRTL = false;

    slideConfig: any;

    slideSpeed: 5000;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.slideConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: this.slideSpeed,
            dots: false,
            rtl: this.isRTL,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        };
    }

}
