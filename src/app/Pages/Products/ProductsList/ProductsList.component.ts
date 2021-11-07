import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmbryoService} from '../../../Services/Embryo.service';

@Component({
    selector: 'app-ProductsList',
    templateUrl: './ProductsList.component.html',
    styleUrls: ['./ProductsList.component.scss']
})
export class ProductsListComponent implements OnInit {

    type: any;
    pips = true;
    tooltips = true;
    category: any;
    pageTitle: string;
    subPageTitle: string;

    public subscribers: any = {};


    products = [
        {
            "id": "18",
            "name": "BIG TEST BOY",
            "price": 69.69,
            "description": "",
            "image": "assets/images/matt_test.jpg",
        }
    ];

    constructor(private route: ActivatedRoute, private router: Router, public embryoService: EmbryoService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.route.queryParams.forEach(queryParams => {
                this.category = queryParams['category'];
                this.type = null;
                this.type = params['type'];

                this.getPageTitle();
            });
        });
    }

    public getPageTitle() {
        this.pageTitle = null;
        this.subPageTitle = null;

        switch (this.type || this.category) {
            case undefined:
                this.pageTitle = 'Fashion';
                this.subPageTitle = 'Explore your favorite fashion style.';
                break;

            case 'gadgets':
                this.pageTitle = 'Gadgets';
                this.subPageTitle = 'Check out our new gadgets.';
                break;

            case 'accessories':
                this.pageTitle = 'Accessories';
                this.subPageTitle = 'Choose the wide range of best accessories.';
                break;

            default:
                this.pageTitle = 'Products';
                this.subPageTitle = null;
                break;
        }
    }

    public addToCart(value) {
        this.embryoService.addToCart(value);
    }

    public transformHits(hits) {
        hits.forEach(hit => {
            hit.stars = [];
            for (let i = 1; i <= 5; i) {
                hit.stars.push(i <= hit.rating);
                i += 1;
            }
        });
        return hits;
    }
}
