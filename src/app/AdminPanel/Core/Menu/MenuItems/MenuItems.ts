import {Injectable} from '@angular/core';

export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
}

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    children?: ChildrenItems[];
}

const MENUITEMS = [
    {
        state: 'admin-panel/reports',
        name: 'Reports',
        type: 'link',
        icon: 'poll'
    },
    {
        state: 'admin-panel/invoices',
        name: 'Invoices',
        type: 'link',
        icon: 'recent_actors'
    },
    {
        state: 'admin-panel/products',
        name: 'Products',
        type: 'link',
        icon: 'shopping_cart'
    },
    {
        state: 'admin-panel/account/profile',
        name: 'Profile',
        type: 'link',
        icon: 'account_circle'
    },
    {
        state: '/home',
        name: 'Go To Site',
        type: 'link',
        icon: 'home'
    }
];

@Injectable()
export class AdminMenuItems {
    getAll(): Menu[] {
        return MENUITEMS;
    }
}
