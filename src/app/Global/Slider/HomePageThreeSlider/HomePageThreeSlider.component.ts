import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'embryo-HomePageThreeSlider',
    templateUrl: './HomePageThreeSlider.component.html',
    styleUrls: ['./HomePageThreeSlider.component.scss']
})
export class HomePageThreeSliderComponent implements OnInit, OnChanges {

    @Input() isRTL = false;

    slideConfig: any;

    slideSpeed: 5000;

    slides: any = [
        {
            img: 'assets/images/h-slider-1.jpg',
            content: '2019 Latest Collection',
            heading_one: 'New Fashion Collection',
        },
        {
            img: 'assets/images/h-slider-2.jpg',
            content: '2019 Latest Collection',
            heading_one: 'Summer Time Collection',
        },
        {
            img: 'assets/images/h-slider-3.jpg',
            content: '2019 Latest Collection',
            heading_one: 'Men\'s Suiting and Clothing',
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.slideConfig = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: this.slideSpeed,
            dots: false,
            rtl: this.isRTL,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: this.slideSpeed
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: this.slideSpeed
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: this.slideSpeed
                    }
                }
            ]
        };
    }

}
