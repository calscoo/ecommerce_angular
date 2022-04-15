import {Component, OnInit} from '@angular/core';

import {EmbryoService} from '../../../Services/Embryo.service';

@Component({
    selector: 'app-homeone',
    templateUrl: './HomeOne.component.html',
    styleUrls: ['./HomeOne.component.scss']
})
export class HomeoneComponent implements OnInit {

    categories: any = {
        clothing: [],
        shoes: [],
        accessories: [],
        gadgets: []
    };
    products: any;
    allProducts: any;

    constructor(public embryoService: EmbryoService) {
    }

    ngOnInit() {
        this.getProducts();
    }

    public getProducts() {
        this.embryoService.getProducts().valueChanges()
            .subscribe(res => this.getProductsResponse(res));
    }

    public getProductsResponse(res) {
        this.products = res;
        this.allProducts = ((res.men.concat(res.women)).concat(res.gadgets)).concat(res.accessories);

        for (let product of this.allProducts) {
            switch (product.category_type) {
                case 'clothing':
                    this.categories.clothing.push(product);
                    break;

                case 'shoes':
                    this.categories.shoes.push(product);
                    break;

                case 'accessories':
                    this.categories.accessories.push(product);
                    break;

                case 'gadgets':
                    this.categories.gadgets.push(product);
                    break;

                default:
                    // code...
                    break;
            }
        }
    }

}
