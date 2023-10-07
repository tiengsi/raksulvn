import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectPaperSizeComponent } from './pages/price-page/select-paper-size/select-paper-size.component';
import { PriceTableComponent } from './pages/price-page/price-table/price-table.component';
import { OrderPriceComponent } from './pages/price-page/order-price/order-price.component';
import { AppService } from './app.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormatNumberPipe } from './pipes/format-number.pipe';
import { PricePageComponent } from './pages/price-page/price-page.component';
import { DayOfWeekPipe } from './pipes/day-of-week.pipe';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SelectPaperSizeComponent,
    PriceTableComponent,
    OrderPriceComponent,
    FormatNumberPipe,
    PricePageComponent,
    DayOfWeekPipe,
    SpinnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
