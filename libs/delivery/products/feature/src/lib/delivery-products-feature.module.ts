import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFrameComponent } from './products-frame/products-frame.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsButtonFeatureModule } from '@amm/shared/components/button/feature';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsFrameComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedComponentsButtonFeatureModule],
  declarations: [ProductsFrameComponent]
})
export class DeliveryProductsFeatureModule {}

