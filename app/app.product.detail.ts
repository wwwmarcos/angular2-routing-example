import {Component}                      from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Router, RouteParams}            from 'angular2/router';
import {ProductService}                 from './app.products.service';
import {Product}                        from './product';

@Component({
  selector: 'product-detail',
  templateUrl: './app/product.detail.html',
  providers: [ProductService]  
})

export class ProductDetail {
  public product: Product;
  public buttonMensage: String;
  
  constructor(
    private _service: ProductService,
    private _router:  Router,
    private _routerParams: RouteParams
  ) {
    this.buttonMensage = 'Back to list';
   }
  
  ngOnInit(){
    let id = this._routerParams.get('id');
    this._service.getProductById(id)
    .then(
      response => this.product = response
     );
  }
  
  backToList(): void{
    this._router.navigate( ['ProductList'] );  
  } 
  
}