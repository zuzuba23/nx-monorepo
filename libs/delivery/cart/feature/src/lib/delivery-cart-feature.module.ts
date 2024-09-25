import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartFrameComponent } from './cart-frame/cart-frame.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CartFrameComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [CartFrameComponent]
})
export class DeliveryCartFeatureModule {}
