import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmbryoService} from '../../../Services/Embryo.service';

@Component({
    selector: 'app-DetailPage',
    templateUrl: './DetailPage.component.html',
    styleUrls: ['./DetailPage.component.scss']
})
export class DetailPageComponent implements OnInit {

    id: any;
    type: any;
    apiResponse: any;
    singleProductData: any;
    productsList: any;

    products = [
        {
            "id": "18",
            "name": "BIG TEST BOY",
            "price": 69.69,
            "description": "",
            "image": "assets/images/matt_test.jpg",
        },
        {
            "id": "18",
            "name": "BIG TEST BOY",
            "price": 69.69,
            "description": "",
            "image": "assets/images/matt_test.jpg",
        },
        {
            "id": "18",
            "name": "BIG TEST BOY",
            "price": 69.69,
            "description": "",
            "image": "assets/images/matt_test.jpg",
        },
        {
            "id": "18",
            "name": "BIG TEST BOY",
            "price": 69.69,
            "description": "",
            "image": "assets/images/matt_test.jpg",
        },
        {
            "id": "18",
            "name": "BIG TEST BOY",
            "price": 69.69,
            "description": "",
            "image": "assets/images/matt_test.jpg",
        },
        {
            "id": "18",
            "name": "BIG TEST BOY",
            "price": 69.69,
            "description": "",
            "image": "assets/images/matt_test.jpg",
        }
    ];

    product = {
        "id": 16,
        "description": "Adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae! Lorem ipsum dolor sit amet consectetur",
        "image": "assets/images/accessroies/a-1-a.jpg",
        "image_gallery": [
            "assets/images/accessroies/a-1-a.jpg",
            "assets/images/accessroies/a-1-b.jpg",
            "assets/images/accessroies/a-1-c.jpg",
            "assets/images/accessroies/a-1-d.jpg"
        ],
        "name": "Laptop Backpack",
        "price": 92.75,
        "quantity": 1,
    };

    constructor(private route: ActivatedRoute,
                private router: Router,
                public embryoService: EmbryoService) {

    }

    ngOnInit() {
        this.route.params.subscribe(res => {
            this.id = res.id;
            this.type = res.type;
            this.getData();
        });
    }

    public getData() {
        this.embryoService.getProducts().valueChanges().subscribe(res => this.checkResponse(res));
    }

    public checkResponse(response) {
        this.singleProductData = this.product;
        this.productsList = null;
        this.productsList = this.products;
    }

    public addToCart(value) {
        this.embryoService.addToCart(value);
    }

    public addToWishList(value) {
        this.embryoService.addToWishlist(value);
    }

}
