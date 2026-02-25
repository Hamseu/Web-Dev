import {Component} from '@angular/core';
import { ProductList } from './product-list/product-list';
import {Header} from './header/header'
import { RouterOutlet } from '@angular/router';
import { NavigationPanel } from './navigation-panel/navigation-panel';
@Component({
  selector: 'app-root',
  template: `<app-header> </app-header> 
             <app-navigation-panel /> 
             <router-outlet/>
 `,
  imports: [ProductList, Header, RouterOutlet, NavigationPanel],
})
export class App {
}
