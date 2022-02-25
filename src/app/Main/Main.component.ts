import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {interval, Subscription} from 'rxjs';
import {finalize, take, tap} from 'rxjs/operators';
import {LoadingBarService} from '@ngx-loading-bar/core';
import {EmbryoService} from '../Services/Embryo.service';
import {MenuItems} from '../Core/menu/menu-items/menu-items';
import {Directionality} from '@angular/cdk/bidi';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-main',
    templateUrl: './Main.component.html',
    styleUrls: ['./Main.component.scss']
})
export class MainComponent implements OnInit {

    timer = 0;
    right: any;
    left: any;
    currentUrl: any;
    private _dirChangeSubscription = Subscription.EMPTY;

    constructor(private loader: LoadingBarService,
                public embryoService: EmbryoService,
                public menuItems: MenuItems,
                dir: Directionality,
                public translate: TranslateService,
                private router: Router,
                meta: Meta, title: Title,
                private activatedRoute: ActivatedRoute) {

        this.right = 'rtl';
        this.left = 'ltr';

        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.currentUrl = event.url;
                }
            });
    }

    ngOnInit() {
        this.startTimer();
        document.getElementById('html').classList.add('user-end');
    }

    public startTimer() {
        this.timer = 0;
        interval(100).pipe(
            take(3),
            tap(value => {
                this.timer = value + 1;
            }),
            finalize(() => this.loader.complete()),
        ).subscribe();

        // We're sure that subscription has been made, we can start loading bar service
        this.loader.start();
    }

    public hideSideNav() {
        this.embryoService.sidenavOpen = false;
    }

    public changeDirection() {
        if (this.left == 'rtl') {
            this.left = 'ltr';
            this.embryoService.isDirectionRtl = false;
        } else {
            this.left = 'rtl';
            this.embryoService.isDirectionRtl = true;
        }

        this.embryoService.featuredProductsSelectedTab = 0;
        this.embryoService.newArrivalSelectedTab = 0;
    }

    /**
     * On window scroll add class header-fixed.
     */
    @HostListener('window:scroll', ['$event'])
    onScrollEvent($event) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollTop >= 200) {
            document.querySelector('app-main').classList.add('header-fixed');
        } else {
            document.querySelector('app-main').classList.remove('header-fixed');
        }
    }

    /**
     *As router outlet will emit an activate event any time a new component is being instantiated.
     */
    onActivate(e) {
        window.scroll(0, 0);
    }
}
