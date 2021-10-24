import {NgModule} from '@angular/core';

import {MenuToggleAnchorDirective, MenuToggleDirective, MenuToggleLinkDirective} from './MenuToggle';

@NgModule({
    declarations: [
        MenuToggleAnchorDirective,
        MenuToggleLinkDirective,
        MenuToggleDirective,
    ],
    exports: [
        MenuToggleAnchorDirective,
        MenuToggleLinkDirective,
        MenuToggleDirective,
    ],
})
export class MenuToggleModule {
}
