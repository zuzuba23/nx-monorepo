import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersFrameComponent } from './orders-frame/orders-frame.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsCardFeatureModule } from '@amm/shared/components/card/feature';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: OrdersFrameComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedComponentsCardFeatureModule],
  declarations: [OrdersFrameComponent]
})
export class DeliveryOrdersFeatureModule {}

