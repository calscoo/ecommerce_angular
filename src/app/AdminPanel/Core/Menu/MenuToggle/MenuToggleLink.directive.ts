import {Directive, HostBinding, Inject, Input, OnDestroy, OnInit} from '@angular/core';

import {MenuToggleDirective} from './MenuToggle.directive';

@Directive({
    selector: '[menuToggleLink]'
})
export class MenuToggleLinkDirective implements OnInit, OnDestroy {

    @Input() public group: any;
    protected nav: MenuToggleDirective;

    public constructor(@Inject(MenuToggleDirective) nav: MenuToggleDirective) {
        this.nav = nav;
    }

    protected _open: boolean;

    @HostBinding('class.open')
    @Input()
    get open(): boolean {
        return this._open;
    }

    set open(value: boolean) {
        this._open = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }

    public ngOnInit(): any {
        this.nav.addLink(this);

        if (this.group) {
            const routeUrl = this.nav.getUrl();
            const currentUrl = routeUrl.split('/');
            if (currentUrl.indexOf(this.group) > 0) {
                this.toggle();
            }
        }
    }

    public ngOnDestroy(): any {
        this.nav.removeGroup(this);
    }

    public toggle(): any {
        this.open = !this.open;
    }
}
