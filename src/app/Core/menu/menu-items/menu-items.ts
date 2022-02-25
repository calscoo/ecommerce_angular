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
        name: 'HOME',
        type: 'link',
        icon: 'home'
    },
    {
        state: 'products/',
        name: 'SHOP',
        type: 'link',
        icon: 'storefront'
    }
];

// const HeaderOneItems = [
//     {
//         state: 'home',
//         name: 'HOME',
//         type: 'link',
//         icon: 'home'
//     },
//     {
//         state: '',
//         name: 'SHOP',
//         type: 'sub',
//         icon: 'storefront',
//         children: [
//             {
//                 state: 'products/',
//                 name: 'Products',
//                 type: 'link',
//                 icon: 'photo_library'
//             },
//             {
//                 state: 'cart',
//                 name: 'Cart',
//                 type: 'link',
//                 icon: 'shopping_cart'
//             },
//             {
//                 state: 'checkout',
//                 name: 'Checkout',
//                 type: 'link',
//                 icon: 'shopping_bag'
//             }
//         ]
//     },
//     {
//         state: 'admin-panel',
//         name: 'ADMIN PANEL',
//         type: 'link',
//         icon: 'admin_panel_settings'
//     }
// ];

const FooterOneItems = [
    {
        state: '',
        name: 'ABOUT',
        type: 'sub',
        icon: '',
        children: [
            {
                state: 'about',
                name: 'ABOUT',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'privacy-policy',
                name: 'PRIVACY POLICY',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'faq',
                name: 'FAQ',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'contact',
                name: 'CONTACT US',
                type: 'link',
                icon: 'perm_contact_calendar',
            }
        ]
    },
    {
        state: '',
        name: 'SESSION',
        type: 'sub',
        icon: '',
        children: [
        ]
    },
    {
        state: '',
        name: 'CATEGORIES',
        type: 'sub',
        icon: '',
        children: [
            {
                state: 'products/women',
                name: 'WOMEN',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'products/men',
                name: 'MEN',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'products/accesories',
                name: 'ACCESSORIES',
                type: 'link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'products/gadgets',
                name: 'GADGETS',
                type: 'link',
                icon: 'arrow_right_alt',
            }
        ]
    },
    {
        state: '',
        name: 'SOCIAL',
        type: 'sub',
        icon: '',
        children: [
            {
                state: 'https://www.facebook.com/',
                name: 'Facebook',
                type: 'social_link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'https://twitter.com/',
                name: 'Twitter',
                type: 'social_link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'https://www.youtube.com/',
                name: 'Youtube',
                type: 'social_link',
                icon: 'arrow_right_alt',
            },
            {
                state: 'https://plus.google.com',
                name: 'Google Plus',
                type: 'social_link',
                icon: 'arrow_right_alt',
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

    /*
     * Get all footer menu
     */
    getFooterOneMenu(): Menu[] {
        return FooterOneItems;
    }
}
