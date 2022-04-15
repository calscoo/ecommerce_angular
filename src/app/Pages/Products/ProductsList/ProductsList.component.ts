import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmbryoService} from '../../../Services/Embryo.service';
import {ProductsService} from "../../../products.service";

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

    products = this.productsService.getProducts();

    constructor(private route: ActivatedRoute, public embryoService: EmbryoService, public productsService: ProductsService) {
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
        this.pageTitle = 'Products';
    }

    public addToCart(value) {
        this.embryoService.addToCart(value);
    }
}
