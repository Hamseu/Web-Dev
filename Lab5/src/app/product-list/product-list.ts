import { Component, signal, computed, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {Product} from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import allproducts from '../models/allproducts.json'
import {Categories} from '../models/Categories.model'
import {UserCard} from '../user-card/user-card';


const categoryMap: Record<string, keyof Categories> = {
  GraphicCards: 'GraphicCards',
  Phones: 'Phones',
  Furniture: 'Furniture',
  Shoes: 'Shoes',
};

@Component({
  selector: 'product-list',
  imports: [UserCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
     mimicDB = signal <Categories>(allproducts as Categories);
     category = signal< string | null>(null);
    
   products = computed(() => {
     const key = categoryMap[this.category() ?? ''];
    return key ? this.mimicDB()[key] : [];
     } 
   );

   constructor(private route: ActivatedRoute) {
  this.route.paramMap.subscribe(params => {
    this.category.set(params.get('category'));
  });
}

     itemDelete(id: string) {
        const cat = this.category();
        if (!cat) return;
        const key = categoryMap[cat];
        this.mimicDB.update(db => ({...db, [key]: db[key].filter(p => p.id !== id),
  }));
}

}
