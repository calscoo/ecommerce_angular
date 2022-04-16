import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {
  }

  products = [
    {
      "id": "1",
      "name": "1test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/items/item1/item1.png",
      "image_gallery": [
        "assets/images/items/item1/item1.png",
        "assets/images/items/item1/item1.png",
        "assets/images/items/item1/item1.png",
        "assets/images/items/item1/item1.png"
      ],
    },
    {
      "id": "2",
      "name": "2test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/items/item2/item2.png",
      "image_gallery": [
        "assets/images/items/item2/item2.png",
        "assets/images/items/item2/item2.png",
        "assets/images/items/item2/item2.png",
        "assets/images/items/item2/item2.png"
      ],
    }
  ];

  getProducts(){
    return this.products;
  }

  getProduct(id) {
    for (let product of this.products) {
      if (id.toString() == product.id.toString()) {
        return product;
      }
    }
    return null;
  }
}
