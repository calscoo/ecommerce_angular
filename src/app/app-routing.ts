import {Routes} from '@angular/router';

import {MainComponent} from './Main/Main.component';
import {HomeoneComponent} from './Pages/Home/HomeOne/HomeOne.component';
import {NotFoundComponent} from './Pages/NotFound/NotFound.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home', loadChildren: () =>
                    import('./Pages/Products/Products.module').then(m => m.ProductsModule)
            },
            {
                path: 'blog',
                component: HomeoneComponent
            },
            {
                path: 'not-found',
                component: NotFoundComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
