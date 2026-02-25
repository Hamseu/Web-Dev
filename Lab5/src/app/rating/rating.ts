import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  templateUrl: './rating.html',
  styleUrls: ['./rating.css'],
})
export class RatingComponent {
  @Input({ required: true }) value!: number;
  stars = [1, 2, 3, 4, 5];

 getFillPercent(starIndex: number): number {
  const fill = this.value - (starIndex - 1);
  if (fill >= 1) return 100;
  if (fill <= 0) return 0;
  return Math.round(fill * 100);
}
}
