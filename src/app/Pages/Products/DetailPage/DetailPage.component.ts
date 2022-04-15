import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmbryoService} from '../../../Services/Embryo.service';
import {ProductsService} from "../../../products.service";

@Component({
    selector: 'app-DetailPage',
    templateUrl: './DetailPage.component.html',
    styleUrls: ['./DetailPage.component.scss']
})
export class DetailPageComponent implements OnInit {

    product: any;

    constructor(private route: ActivatedRoute,
                public embryoService: EmbryoService,
                public productsService: ProductsService) {

    }

    ngOnInit() {
        this.route.params.subscribe(res => {
            this.product = this.productsService.getProduct(res.id);
        });
    }

}
