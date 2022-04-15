import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
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
import {BarRatingModule} from 'ngx-bar-rating';
import {AgmCoreModule} from '@agm/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SlickCarouselModule} from 'ngx-slick-carousel';

import {SalesComponent} from './Sales/Sales.component';
import {SubscribeOneComponent} from './Subscribe/SubscribeOne/SubscribeOne.component';
import {HeaderCartComponent} from './HeaderCart/HeaderCart.component';
import {PageTitleComponent} from './PageTitle/PageTitle.component';
import {HomePageOneSliderComponent} from './Slider/HomePageOneSlider/HomePageOneSlider.component';
import {AboutInfoComponent} from './AboutInfo/AboutInfo.component';
import {ImgZoomComponent} from './ImgZoom/ImgZoom.component';
import {HeaderUserProfileDropdownComponent} from './HeaderUserProfileDropdown/HeaderUserProfileDropdown.component';
import {AppLogoComponent} from './AppLogo/AppLogo.component';
import {SubscribeTwoComponent} from './Subscribe/SubscribeTwo/SubscribeTwo.component';
import {HomePageTwoSliderComponent} from './Slider/HomePageTwoSlider/HomePageTwoSlider.component';
import {HomePageThreeSliderComponent} from './Slider/HomePageThreeSlider/HomePageThreeSlider.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatBadgeModule,
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
        BarRatingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC9PnuRk42kbCPMOvsfHpn40r5SoyN38zI',
            libraries: ['places']
        }),
        FormsModule,
        ReactiveFormsModule,
        SlickCarouselModule
    ],
    declarations: [
        SalesComponent,
        SubscribeOneComponent,
        HeaderCartComponent,
        PageTitleComponent,
        HomePageOneSliderComponent,
        AboutInfoComponent,
        ImgZoomComponent,
        HeaderUserProfileDropdownComponent,
        AppLogoComponent,
        SubscribeTwoComponent,
        HomePageTwoSliderComponent,
        HomePageThreeSliderComponent,
    ],
    exports: [
        SalesComponent,
        SubscribeOneComponent,
        HeaderCartComponent,
        PageTitleComponent,
        HomePageOneSliderComponent,
        AboutInfoComponent,
        ImgZoomComponent,
        HeaderUserProfileDropdownComponent,
        AppLogoComponent,
        SubscribeTwoComponent,
        HomePageTwoSliderComponent,
        HomePageThreeSliderComponent,
    ]
})
export class GlobalModule {
}
