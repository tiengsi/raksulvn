import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPriceComponent } from './pages/price-page/order-price/order-price.component';
import { PriceTableComponent } from './pages/price-page/price-table/price-table.component';
import { SelectPaperSizeComponent } from './pages/price-page/select-paper-size/select-paper-size.component';
import { PricePageComponent } from './pages/price-page/price-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/price-page', pathMatch: 'full' },
  { path: 'price-page', component: PricePageComponent },
  { path: 'select-paper-size', component: SelectPaperSizeComponent },
  { path: 'price-table', component: PriceTableComponent },
  { path: 'order-price', component: OrderPriceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
