import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss'],
})
export class PriceTableComponent  implements OnChanges{
  selectedPrice: any;
  selectedIndex: any;
  isShowMore = false;

  @Input() priceData: any;
  @Output() currentIndex = new EventEmitter<any>();
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.currentIndex.emit(this.selectedIndex);
  }

  ngOnInit() {
  }

  selectPrice(i: number, j: number) {
    this.selectedIndex = { currentRow: i, currentCol: j };
    this.currentIndex.emit(this.selectedIndex);
  }

  showMore() {
    // Handle the "See More" button click
    // You can expand the table to show all available prices.
    this.isShowMore = !this.isShowMore;
  }
}
