import { Component, Input, output } from '@angular/core';
import {Product} from '../models/product.model';
import {RatingComponent} from '../rating/rating';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'user-card',
  imports: [RatingComponent, CurrencyPipe],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
       @Input({ required: true }) product!: Product;

       onImageError(event: Event) {
           (event.target as HTMLImageElement).src = 'Defaultim.png';
}

      Tshare(){
       const text = encodeURIComponent(`${this.product.label}`);
       const url = encodeURIComponent(this.product.link);
       const Tlink = `https://t.me/share/url?url=${url}&text=${text}`;
       window.open(Tlink, '_blank');
      }

      Wshare(){
        const text = encodeURIComponent(`${this.product.link}`);
        const url = encodeURIComponent(`${this.product.link}`);
        const Wlink = `https://wa.me/?text=Check out this product: ${this.product.link}`
        window.open(Wlink, '_blank');
      }

       likeCount = 0;


       deleteID = output<string>();

       addLike(){
        this.likeCount ++;
       }

      removeItem(){
        this.deleteID.emit(this.product.id);
      }

}
