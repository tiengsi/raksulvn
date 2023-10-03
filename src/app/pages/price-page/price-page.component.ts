import { Component } from '@angular/core';
import { PricePageService } from './price-page.service';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss'],
})
export class PricePageComponent {
  title = 'price-table-app';
  priceData: any;
  selectedIndex: any;
  constructor(private priceService: PricePageService) {}

  getPrice(e: string) {
    this.priceService.getPrice(e).subscribe((response) => {
      this.priceData = response;
    });
  }

  currentIndex(e: object) {
    this.selectedIndex = e;
  }
}
