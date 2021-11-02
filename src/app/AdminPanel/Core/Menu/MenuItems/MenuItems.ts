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
        state: 'admin-panel/invoices',
        name: 'Invoices',
        type: 'link',
        icon: 'recent_actors'
    },
    {
        state: 'admin-panel/products',
        name: 'Products',
        type: 'link',
        icon: 'photo_library'
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
