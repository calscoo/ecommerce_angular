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
    }

    trackByObjectID(index, hit) {
        return hit.objectID;
    }

    ngOnInit() {
        if (this.gridThree) {
            this.lg = 33;
            this.xl = 33;
        }
    }

    public onLoad() {
        this.loaded = true;
    }

}
