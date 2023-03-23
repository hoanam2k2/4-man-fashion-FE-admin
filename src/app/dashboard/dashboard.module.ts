import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { NgZorroAntdModule } from '../share_modules/ng-add-ng-zorro-antd.module';
import { CategoryComponent } from './property/category/category.component';
import { ColorComponent } from './property/color/color.component';
import { MaterialComponent } from './property/material/material.component';
import { SizeComponent } from './property/size/size.component';
import { ModelComponent } from './property/models/model.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { QuillModule } from 'ngx-quill';
import { VoucherComponent } from './voucher/voucher/voucher.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { OrderDetailComponent } from './order/orderDetail/orderDetail.component';
import { OrderComponent } from './order/order.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { AddressComponent } from './create-order/address/address.component';
import { DeliveryComponent } from './create-order/delivery/delivery.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    CategoryComponent,
    ColorComponent,
    VoucherComponent,
    MaterialComponent,
    SizeComponent,
    ModelComponent,
    CreateProductComponent,
    UpdateProductComponent,
    OrderComponent,
    DeliveryComponent,
    AddressComponent,
    CreateOrderComponent,
    OrderDetailComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
  ],

  providers: [],
})
export class DashboardModule {}
