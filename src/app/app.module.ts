import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ToastaModule} from 'ngx-toasta';
import {BidiModule} from '@angular/cdk/bidi';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {environment} from '../environments/environment';

import {AppRoutes} from './app-routing';
import {GlobalModule} from './Global/Global.module';
import {TemplatesModule} from './Templates/Templates.module';
import {MenuItems} from './Core/menu/menu-items/menu-items';

import {EmbryoService} from './Services/Embryo.service';

import {AppComponent} from './app.component';
import {MainComponent} from './Main/Main.component';
import {HeaderTwoComponent} from './Layouts/Header/HeaderTwo/HeaderTwo.component';
import {FooterOneComponent} from './Layouts/Footer/FooterOne/FooterOne.component';
import {MenuComponent} from './Layouts/Menu/Menu/Menu.component';
import {HomeoneComponent} from './Pages/Home/HomeOne/HomeOne.component';
import {NotFoundComponent} from './Pages/NotFound/NotFound.component';
import {SideBarMenuComponent} from './Layouts/Menu/SidebarMenu/SidebarMenu.component';
import {PaymentDetailSideBarComponent} from './Layouts/PaymentDetailSideBar/PaymentDetailSideBar.component';
import {FixedHeaderComponent} from './Layouts/Header/FixedHeader/FixedHeader.component';

import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HomeoneComponent,
        FooterOneComponent,
        MenuComponent,
        SideBarMenuComponent,
        NotFoundComponent,
        PaymentDetailSideBarComponent,
        HeaderTwoComponent,
        FixedHeaderComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'embryo-seo-pre'}),
        BrowserAnimationsModule,
        RouterModule.forRoot(AppRoutes, {onSameUrlNavigation: 'reload', initialNavigation: 'enabled', relativeLinkResolution: 'legacy'}),
        GlobalModule,
        TemplatesModule,
        MatButtonModule,
        FlexLayoutModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatExpansionModule,
        MatSelectModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatChipsModule,
        MatListModule,
        MatSidenavModule,
        MatTabsModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatSliderModule,
        MatRadioModule,
        MatDialogModule,
        MatGridListModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        LoadingBarRouterModule,
        LoadingBarModule,
        AngularFireModule.initializeApp(environment.firebase, 'embryo'),
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        ToastaModule.forRoot(),
        BidiModule,
        SlickCarouselModule,
        PerfectScrollbarModule
    ],
    providers: [
        MenuItems,
        EmbryoService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    exports: [
        RouterModule,
        ToastaModule
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
