import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-price',
  templateUrl: './order-price.component.html',
  styleUrls: ['./order-price.component.scss'],
})
export class OrderPriceComponent {
  @Input() selectedIndex: any;
  @Input() priceData: any;

  constructor() {}

  addToCart() {
    // Handle adding the selected price to the cart or perform other actions.
  }
}
