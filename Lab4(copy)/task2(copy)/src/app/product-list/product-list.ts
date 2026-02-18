import { Component, signal } from '@angular/core';
import {Product} from '../models/product.model';
import {UserCard} from '../user-card/user-card'

@Component({
  selector: 'product-list',
  imports: [UserCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
      products = signal<Product[]>([
    {
    id: '1',
    label: 'Palit RTX 5060 Ti Infinity 3 16GB',
    description: 'Low-cost Palit vendor, 8nm process, 2000+ logical cores, 16GB VRAM',
    price: 314990,
    link: 'https://kaspi.kz/shop/p/palit-rtx-5060-ti-infinity-3-16gb-ne7506t019t1-gb2061s-16-gb-138216471/?c=750000000',
    rating: 4.6,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pf2/p0b/37066117.jpg?format=gallery-medium'
  },
  {
    id: '2',
    label: 'Palit GeForce RTX 5060 Dual 8GB',
    description: 'Budget variant of 5060, not recomended nowadays',
    price: 207990,
    link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5060-dual-8-gb-139915785/?c=750000000',
    rating: 4.3,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pfb/p7b/43159871.png?format=gallery-medium'
  },
  {
    id: '3',
    label: 'Palit GeForce RTX 5070 Infinity 3 12GB',
    description: 'Palit vendor, 12GB, 8000+logical core, high Mghz, DDR6X',
    price: 413000,
    link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5070-infinity-3-ne75070019k9-gb2050s-12-gb-144023378/?c=750000000',
    rating: 4.7,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/pe8/58359337.png?format=gallery-medium'
  },
  {
    id: '4',
    label: 'Palit GeForce RTX 5060 Ti Infinity 3 16GB',
    description: '16GB, 4598 logical cores, 5nm',
    price: 349990,
    link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5060-ti-infinity-3-16-gb-138198242/?c=750000000',
    rating: 4.5,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p27/p81/37007539.jpg?format=gallery-medium'
  },
  {
    id: '5',
    label: 'Gigabyte GeForce GTX 1660 Super OC 6GB',
    description: 'Deprecated, a lot, buy second-hand 2060 12GB instead for same price',
    price: 126990,
    link: 'https://kaspi.kz/shop/p/gigabyte-geforce-gtx-1660-super-oc-gv-n166soc-6gd-6gb-100007697/?c=750000000',
    rating: 4.1,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h09/he3/63838865621022.jpg?format=gallery-medium'
  },
  {
    id: '6',
    label: 'ASUS RTX 5060 Ti Dual OC 16GB',
    description: 'Very budget card from ASUS, only 2 fans, you can find better variants',
    price: 339990,
    link: 'https://kaspi.kz/shop/p/asus-rtx-5060-ti-dual-oc-dual-rtx5060ti-o16g-16-gb-140011715/?c=750000000',
    rating: 4.4,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p5c/pd4/43506800.jpg?format=gallery-medium'
  },
  {
    id: '7',
    label: 'Gigabyte RTX 5070 Ti Windforce OC 16GB',
    description: 'Best variant of 5070Ti, 16GB, average price',
    price: 626190,
    link: 'https://kaspi.kz/shop/p/gigabyte-rtx-5070-ti-windforce-oc-edition-gv-n507twf3oc-16gd-16-gb-135370435/?c=750000000',
    rating: 4.8,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p1d/p4b/27092012.jpg?format=gallery-medium'
  },
  {
    id: '8',
    label: 'Gigabyte RTX 5070 Windforce OC 12GB',
    description: '12GB, Gigabyte vendor, 8976 logical cores',
    price: 451758,
    link: 'https://kaspi.kz/shop/p/gigabyte-rtx-5070-gv-n5070wf3oc-12gd-windforce-oc-sff-12-gb-138252608/?c=750000000',
    rating: 4.5,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pff/p50/37200576.png?format=gallery-medium'
  },
  {
    id: '9',
    label: 'MSI GeForce RTX 5060 Ti Shadow 2X OC Plus 16GB',
    description: '16GB, high-cost vendor, 4658 logical cores, 2400+ Mghz',
    price: 345897,
    link: 'https://kaspi.kz/shop/p/msi-geforce-rtx-5060-ti-shadow-2x-oc-plus-16-gb-141927385/?c=750000000',
    rating: 4.4,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p19/p6e/50950270.png?format=gallery-medium'
  },
  {
    id: '10',
    label: 'Palit NE7507T019T2 16GB',
    description: 'Experimental 5070Ti from Palit, 5nm process, 16GB, DDR6X',
    price: 691193 ,
    link: 'https://kaspi.kz/shop/p/palit-ne7507t019t2-gb2031u-16-gb-143673621/?c=750000000',
    rating: 4.3,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p21/p8b/57128003.jpg?format=gallery-medium'
  },
  {
    id: '11',
    label: 'Gigabyte RTX 5070Ti Gaming OC 16GB',
    description: '16GB of VRAM, 8976 logical cores, DDR6X type, 3 fans, 2500+ Mghz',
    price: 709817,
    link: 'https://kaspi.kz/shop/p/gigabyte-rtx5070ti-gaming-oc-16g-gv-n507tgaming-oc-16gd-16-gb-135357720/?c=750000000',
    rating: 4.3,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pab/p90/32578879.jpg?format=gallery-medium'
  }
  ]);
}
