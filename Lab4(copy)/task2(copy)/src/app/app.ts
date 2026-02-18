import {Component} from '@angular/core';
import { ProductList } from './product-list/product-list';
import {Header} from './header/header'
@Component({
  selector: 'app-root',
  template: `<app-header> </app-header> <product-list> </product-list> `,
  imports: [ProductList, Header],
})
export class App {
}
