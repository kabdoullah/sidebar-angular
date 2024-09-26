import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { VoucherComponent } from './voucher/voucher.component';
import { GiftCardComponent } from './gift-card/gift-card.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'pages', component: PagesComponent },
    { path: 'voucher', component: VoucherComponent },
    { path: 'gift-card', component: GiftCardComponent }
];
