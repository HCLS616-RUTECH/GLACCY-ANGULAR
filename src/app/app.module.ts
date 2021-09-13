import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import ruLocale from '@angular/common/locales/ru';
import {ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageHomeComponent } from './pages/pages/page-home/page-home.component';
import { PageIcecreamComponent } from './pages/pages/page-icecream/page-icecream.component';
import { PageNocontentComponent } from './pages/pages/page-nocontent/page-nocontent.component';
import { NavigationComponent } from './pages/global-components/navigation/navigation.component';
import { FooterComponent } from './pages/global-components/footer/footer.component';
import { DoubleIcecreamComponent } from './pages/pages/minor-components/page-home/double-icecream/double-icecream.component';
import { MarketComponent } from './pages/pages/minor-components/page-icecream/market/market.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { SpecOffersComponent } from './pages/pages/minor-components/page-home/spec-offers/spec-offers.component';
import { HitsComponent } from './pages/pages/minor-components/page-home/hits/hits.component';
import { MarketInfoComponent } from './pages/pages/minor-components/page-home/market-info/market-info.component';
import { AdditionalSectionsComponent } from './pages/pages/minor-components/page-home/additional-sections/additional-sections.component';
import { MapComponent } from './pages/pages/minor-components/page-home/map/map.component';
import { BarComponent } from './pages/global-components/minor-components/navigation/bar/bar.component';
import { LoginComponent } from './pages/global-components/minor-components/navigation/login/login.component';
import { BasketComponent } from './pages/global-components/minor-components/navigation/basket/basket.component';
import { PageLoginComponent } from './pages/pages/page-login/page-login.component';
import { PageAccountComponent } from './pages/pages/page-account/page-account.component';
import { PageEmailnotifyComponent } from './pages/pages/page-emailnotify/page-emailnotify.component';
import { ProductCardComponent } from './pages/pages/minor-components/page-icecream/product-card/product-card.component';

import {environment} from '../environments/environment';
import {AuthInterceptor} from './shared/auth.interceptor';
import {AuthGuard} from './shared/auth.guard';
import { AvatarComponent } from './pages/pages/minor-components/page-account/avatar/avatar.component';

registerLocaleData(ruLocale, 'ru');

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageIcecreamComponent,
    PageNocontentComponent,
    NavigationComponent,
    FooterComponent,
    DoubleIcecreamComponent,
    MarketComponent,
    MainLayoutComponent,
    SpecOffersComponent,
    HitsComponent,
    MarketInfoComponent,
    AdditionalSectionsComponent,
    MapComponent,
    BarComponent,
    LoginComponent,
    BasketComponent,
    PageLoginComponent,
    PageAccountComponent,
    PageEmailnotifyComponent,
    ProductCardComponent,
    AvatarComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        ReactiveFormsModule
    ],
  providers: [INTERCEPTOR_PROVIDER, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
