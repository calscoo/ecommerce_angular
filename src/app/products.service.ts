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
      "image": "assets/images/item1/item1.jpg",
      "image_gallery": [
        "assets/images/item1/item1.jpg",
        "assets/images/item1/item1.jpg",
        "assets/images/item1/item1.jpg",
        "assets/images/item1/item1.jpg"
      ],
    },
    {
      "id": "2",
      "name": "2test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item2/item2.jpg",
      "image_gallery": [
        "assets/images/item2/item2.jpg",
        "assets/images/item2/item2.jpg",
        "assets/images/item2/item2.jpg",
        "assets/images/item2/item2.jpg"
      ],
    },
    {
      "id": "3",
      "name": "3test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item3/item3.jpg",
      "image_gallery": [
        "assets/images/item3/item3.jpg",
        "assets/images/item3/item3.jpg",
        "assets/images/item3/item3.jpg",
        "assets/images/item3/item3.jpg"
      ],
    },
    {
      "id": "4",
      "name": "4test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item4/item4.jpg",
      "image_gallery": [
        "assets/images/item4/item4.jpg",
        "assets/images/item4/item4.jpg",
        "assets/images/item4/item4.jpg",
        "assets/images/item4/item4.jpg"
      ],
    },
    {
      "id": "5",
      "name": "5test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item5/item5.jpg",
      "image_gallery": [
        "assets/images/item5/item5.jpg",
        "assets/images/item5/item5.jpg",
        "assets/images/item5/item5.jpg",
        "assets/images/item5/item5.jpg"
      ],
    },
    {
      "id": "6",
      "name": "6test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item6/item6.jpg",
      "image_gallery": [
        "assets/images/item6/item6.jpg",
        "assets/images/item6/item6.jpg",
        "assets/images/item6/item6.jpg",
        "assets/images/item6/item6.jpg"
      ],
    },
    {
      "id": "7",
      "name": "7test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item7/item7.jpg",
      "image_gallery": [
        "assets/images/item7/item7.jpg",
        "assets/images/item7/item7.jpg",
        "assets/images/item7/item7.jpg",
        "assets/images/item7/item7.jpg"
      ],
    },    {
      "id": "8",
      "name": "8test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item8/item8.jpg",
      "image_gallery": [
        "assets/images/item8/item8.jpg",
        "assets/images/item8/item8.jpg",
        "assets/images/item8/item8.jpg",
        "assets/images/item8/item8.jpg"
      ],
    },
    {
      "id": "9",
      "name": "9test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item9/item9.jpg",
      "image_gallery": [
        "assets/images/item9/item9.jpg",
        "assets/images/item9/item9.jpg",
        "assets/images/item9/item9.jpg",
        "assets/images/item9/item9.jpg"
      ],
    },
    {
      "id": "10",
      "name": "10test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item10/item10.jpg",
      "image_gallery": [
        "assets/images/item10/item10.jpg",
        "assets/images/item10/item10.jpg",
        "assets/images/item10/item10.jpg",
        "assets/images/item10/item10.jpg"
      ],
    },
    {
      "id": "11",
      "name": "11test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item11/item11.jpg",
      "image_gallery": [
        "assets/images/item11/item11.jpg",
        "assets/images/item11/item11.jpg",
        "assets/images/item11/item11.jpg",
        "assets/images/item11/item11.jpg"
      ],
    },
    {
      "id": "12",
      "name": "12test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item12/item12.png",
      "image_gallery": [
        "assets/images/item12/item12.png",
        "assets/images/item12/item12.png",
        "assets/images/item12/item12.png",
        "assets/images/item12/item12.png"
      ],
    },
    {
      "id": "13",
      "name": "13test name",
      "price": 99.99,
      "description": "test description",
      "image": "assets/images/item13/item13.png",
      "image_gallery": [
        "assets/images/item13/item13.png",
        "assets/images/item13/item13.png",
        "assets/images/item13/item13.png",
        "assets/images/item13/item13.png"
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
