import {Component}           from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {ProductService}      from './app.products.service';
import {Product}             from './product';

@Component({
    selector: 'product-list',
    templateUrl: './app/product.list.html',
    providers: [ProductService]
})

export class ProductList {
  public products: Product[];
  public buttonMensage: String;
  
  constructor(
    private _service: ProductService, 
    private _router: Router
  ) {
    this.buttonMensage = 'more';
   }
   
  moreDetails(product: Product): void{
    this._router.navigate( ['ProductDetail', { id: product.id }] );  
  } 
  
  ngOnInit(){
    this._service.getProducts()
    .then(
        response => this.products = response
      );
  }
}