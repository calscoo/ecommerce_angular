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
    category: any;
    pageTitle: string;
    subPageTitle: string;

    products = [
        {
            "id": "18",
            "name": "BIG TEST BOY",
            "price": 69.69,
            "description": "",
            "image": "assets/images/item2.png",
        },
        {
            "id": "18",
            "name": "BIG TEST BOY",
            "price": 69.69,
            "description": "",
            "image": "assets/images/item1.png",
        },
        {
            "id": "18",
            "name": "BIG TEST BOY",
            "price": 69.69,
            "description": "",
            "image": "assets/images/item2.png",
        },
        {
            "id": "18",
            "name": "BIG TEST BOY",
            "price": 69.69,
            "description": "",
            "image": "assets/images/item1.png",
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
}
