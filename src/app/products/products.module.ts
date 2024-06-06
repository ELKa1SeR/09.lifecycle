import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products.routing';
import { ProductComponent } from './pages/product/product.component';
import { PriceComponent } from './components/price/price.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  declarations: [
    ProductComponent,
    PriceComponent
  ]
})
export class ProductsModule { }
