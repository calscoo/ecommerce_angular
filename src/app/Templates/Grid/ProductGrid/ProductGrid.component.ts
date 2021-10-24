import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'embryo-ProductGrid',
    templateUrl: './ProductGrid.component.html',
    styleUrls: ['./ProductGrid.component.scss']
})
export class ProductGridComponent implements OnInit {

    @Input() products: any;

    @Input() currency: string;

    @Input() gridLength: any;

    @Input() gridThree = false;

    @Output() addToCart: EventEmitter<any> = new EventEmitter();

    @Output() addToWishList: EventEmitter<any> = new EventEmitter();

    loaded = false;
    lg = 25;
    xl = 25;

    constructor() {
        console.log(this.products);
    }

    trackByObjectID(index, hit) {
        return hit.objectID;
    }

    ngOnInit() {
        console.log(this.products);
        if (this.gridThree) {
            this.lg = 33;
            this.xl = 33;
        }
    }

    public addToCartProduct(value: any) {
        this.addToCart.emit(value);
    }

    public onLoad() {
        console.log(this.products);
        this.loaded = true;
    }

    public productAddToWishlist(value: any, parentClass) {
        if (!(document.getElementById(parentClass).classList.contains('wishlist-active'))) {
            const element = document.getElementById(parentClass).className += ' wishlist-active';
        }
        this.addToWishList.emit(value);
    }

    public checkCartAlready(singleProduct) {
        const products = JSON.parse(localStorage.getItem('cart_item')) || [];
        if (!products.some((item) => item.name == singleProduct.name)) {
            return true;
        }
    }

}
