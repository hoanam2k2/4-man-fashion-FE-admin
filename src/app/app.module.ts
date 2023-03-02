import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  JwtHelperService,
  JwtInterceptor,
  JwtModule,
} from '@auth0/angular-jwt';
import { CommonConstants } from './constants/common-constants';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './common-services/auth.service';
import { JwtService } from './common-services/jwt.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NgZorroAntdModule } from './share_modules/ng-add-ng-zorro-antd.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { ProductDetailComponent } from './dashboard/product/productDetail/productDetail.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem(CommonConstants.TOKEN_KEY),
        allowedDomains: ['example.com'],
        disallowedRoutes: ['example.com/login'],
      },
    }),
  ],

  providers: [
    AuthGuard,
    AuthService,
    JwtService,
    JwtHelperService, // Add JwtHelperService to the providers array
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent, ProductDetailComponent],
})
export class AppModule {}
