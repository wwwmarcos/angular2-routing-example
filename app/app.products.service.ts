import {Injectable} from 'angular2/core';
import {Product}    from './product';

@Injectable()
export class ProductService {
  
  getProducts() { 
    return productPromise; 
  }
  
  getProductById(id: String){
    let product: Product;
    products.forEach((value) => { 
      if (value.id == id) {
        product = value;
      }
    });
    return Promise.resolve(product);
  }
}

var products = [
  new Product('54a05448-0336-418c-b3d7-5293373fbf64', 'TestSumg  MilkyWay Tab S2 9.7', 'A Brilliant Screen That Adjusts to You', '../images/phone.jpg'),
  new Product('4aa42b7f-f0cc-4269-b1d9-0db70dca2053', 'TestSumg  MilkyWay Note5', 'S Pen for everyday productivity', '../images/phone.jpg'),
  new Product('50737deb-b0e3-474f-80b6-ac83beca8b93', 'TestSumg  MilkyWay Note Edge', 'An Innovative Design That Breaks the Mold', '../images/phone.jpg'),
];

var productPromise = Promise.resolve(products);
        
