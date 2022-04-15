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
      "image": "assets/images/item2/item2.png",
      "image_gallery": [
        "assets/images/item2/a-1-a.jpg",
        "assets/images/item2/a-1-b.jpg",
        "assets/images/item2/a-1-c.jpg",
        "assets/images/item2/a-1-d.jpg"
      ],
    },
    {
      "id": "2",
      "name": "2test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item1/item1.png",
      "image_gallery": [
        "assets/images/item1/a-1-a.jpg",
        "assets/images/item1/a-1-b.jpg",
        "assets/images/item1/a-1-c.jpg",
        "assets/images/item1/a-1-d.jpg"
      ],
    },
    {
      "id": "3",
      "name": "3test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item2/item2.png",
      "image_gallery": [
        "assets/images/item2/a-1-a.jpg",
        "assets/images/item2/a-1-b.jpg",
        "assets/images/item2/a-1-c.jpg",
        "assets/images/item2/a-1-d.jpg"
      ],
    },
    {
      "id": "4",
      "name": "4test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item1/item1.png",
      "image_gallery": [
        "assets/images/item1/a-1-a.jpg",
        "assets/images/item1/a-1-b.jpg",
        "assets/images/item1/a-1-c.jpg",
        "assets/images/item1/a-1-d.jpg"
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
