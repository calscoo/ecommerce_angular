import {Routes} from '@angular/router';
import {MainAdminPanelComponent} from './Main/Main.component';

export const AdminPanelRoutes: Routes = [
    {
        path: 'admin-panel',
        redirectTo: 'admin-panel/invoices',
        pathMatch: 'full',
    },
    {
        path: 'admin-panel',
        component: MainAdminPanelComponent,
        children: [
            {
                path: 'invoices', loadChildren: () =>
                    import('./Invoices/Invoices.module').then(m => m.InvoicesModule)
            },
            {
                path: '', loadChildren: () =>
                    import('./Products/Products.module').then(m => m.ProductsModule)
            }
        ]
    }
];
