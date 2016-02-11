import {Component}                      from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProductList}                    from './app.product.list';
import {ProductDetail}                  from './app.product.detail';

@Component({
  selector: 'my-app',
  templateUrl: './app/component.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
{
  path: '/product-list',
  name: 'ProductList',
  component: ProductList
},{
  path: '/product-detail/:id',
  name: 'ProductDetail',
  component: ProductDetail
}])

export class AppComponent {
  
}