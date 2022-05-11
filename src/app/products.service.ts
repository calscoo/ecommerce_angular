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
      "description": "test description",
      "squareup_url": "https://www.google.com",
      "image": "assets/images/items/item1.png",
      "image_gallery": [
        "assets/images/items/item1.png",
        "assets/images/items/item1.png",
        "assets/images/items/item1.png",
        "assets/images/items/item1.png",
      ],
      "variations": [
        {
          "size": "23 x 19",
          "type": "medium",
          "price": 99.99,
        },
        {
          "size": "33 x 27",
          "type": "large",
          "price": 99.99,
        },
      ],
    },
    {
      "id": "2",
      "name": "2test name",
      "description": "test description",
      "squareup_url": "https://www.google.com",
      "image": "assets/images/items/item2.png",
      "image_gallery": [
        "assets/images/items/item2.png",
        "assets/images/items/item2.png",
        "assets/images/items/item2.png",
        "assets/images/items/item2.png",
      ],
      "variations": [
        {
          "size": "23 x 19",
          "type": "medium",
          "price": 99.99,
        },
        {
          "size": "33 x 27",
          "type": "large",
          "price": 99.99,
        },
      ],
    },
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
