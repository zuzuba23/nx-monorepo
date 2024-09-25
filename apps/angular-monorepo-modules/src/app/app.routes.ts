import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'products',
    loadChildren: () => import('@amm/delivery/products/feature').then(m => m.DeliveryProductsFeatureModule),
  },
  {
    path: 'orders',
    loadChildren: () => import('@amm/delivery/orders/feature').then(m => m.DeliveryOrdersFeatureModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('@angular-monorepo-modules/delivery-cart-feature').then(m => m.DeliveryCartFeatureModule),
  }
];
