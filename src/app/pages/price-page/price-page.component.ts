import { Component } from '@angular/core';
import { PricePageService } from './price-page.service';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss'],
})
export class PricePageComponent {
  title = 'price-table-app';
  priceData: any;
  selectedIndex: any;
  constructor(private priceService: PricePageService, public loadingService: LoaderService) {}

  getPrice(e: string) {
    this.loadingService.setLoading(true);
    this.priceService.getPrice(e).subscribe((response) => {
      this.loadingService.setLoading(false);
      this.priceData = response;
    }, (err)=>{
      console.log(err);
      this.priceData = null;
    });
  }

  currentIndex(e: object) {
    this.selectedIndex = e;
  }

  processLoading(){
    // Code here

  }

dismisProcessloading(){
    // Code here
  }
}
