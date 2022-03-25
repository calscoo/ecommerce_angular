import {Injectable} from '@angular/core';

/*
 * Menu interface
 */
export interface Menu {
    state: string;
    name?: string;
    type?: string;
    icon?: string;
    children?: Menu[];
}


const HeaderOneItems = [
    {
        state: 'home',
        name: 'SHOP',
        type: 'link',
        icon: 'shopping_bag'
    },
    {
        state: '',
        name: 'BLOG',
        type: 'sub',
        icon: 'newspaper',
        children: [
            {
                state: 'blog/',
                name: '2022 EXHIBITION',
                type: 'link',
                icon: 'sticky_note_2'
            },
            {
                state: 'blog/',
                name: '2021 EXHIBITION',
                type: 'link',
                icon: 'sticky_note_2'
            }
        ]
    }
];


@Injectable()
export class MenuItems {

    /*
     * Get all header menu
     */
    getMainMenu(): Menu[] {
        return HeaderOneItems;
    }
}
