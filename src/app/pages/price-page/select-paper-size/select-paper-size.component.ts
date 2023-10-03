import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-paper-size',
  templateUrl: './select-paper-size.component.html',
  styleUrls: ['./select-paper-size.component.scss'],
})
export class SelectPaperSizeComponent implements OnInit {
  selectedPaperSize: string = 'A4'; // Initialize with a default value
  paperSizes: string[] = ['A4', 'A5', 'B4', 'B5']; // Define your paper sizes here
  priceData: any;
  @Output() selectValue = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.selectValue.emit(this.selectedPaperSize);
  }

  applySelection(price: string) {
    this.selectValue.emit(price);
  }
}
