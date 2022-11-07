import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/public/layouts/navi/navi.component';
import { CarDetailsFilterPipe } from './pipes/car-details-filter.pipe';
import { BrandsPipe } from './pipes/brands-filter.pipe';
import { ColorsPipe } from './pipes/colors-filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './components/public/pages/register/register.component';
import { LoginComponent } from './components/public/pages/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CarImagesSliderByCarIdComponent } from './components/public/layouts/car-images-slider-by-car-id/car-images-slider-by-car-id.component';
import { CarDetailComponent } from './components/public/pages/cardetail/cardetail.component';
import { CarDetailsComponent } from './components/public/pages/cardetails/cardetails.component';
import { BrandAndColorSelectOptionCarFilterComponent } from './components/public/layouts/brand-and-color-select-option-car-filter/brand-and-color-select-option-car-filter.component';
import { BrandSelectOptionCarFilterComponent } from './components/public/layouts/brand-select-option-car-filter/brand-select-option-car-filter.component';
import { ColorSelectOptionCarFilterComponent } from './components/public/layouts/color-select-option-car-filter/color-select-option-car-filter.component';
import { RouteToCarDetailsPageButtonComponent } from './components/public/layouts/router-buttons/route-to-car-details-page-button/route-to-car-details-page-button.component';
import { CommonChildComponentBaseComponent } from './components/public/bases/common-child-component-base/common-child-component-base.component';
import { PublicChildComponentBaseComponent } from './components/public/bases/public-child-component-base/public-child-component-base.component';
import { AddCarComponent } from './components/admin/pages/management/adds/add-car/add-car.component';
import { RouteToRentPageButtonComponent } from './components/public/layouts/router-buttons/route-to-rent-page-button/route-to-rent-page-button.component';
import { RouteToCarDetailPageButtonComponent } from './components/public/layouts/router-buttons/route-to-car-detail-page-button/route-to-car-detail-page-button.component';
import { RentComponent } from './components/user/pages/rent/rent.component';
import { PayComponent } from './components/user/pages/pay/pay.component';
import { PayWithSavedCardsComponent } from './components/user/layouts/pay-with-saved-cards/pay-with-saved-cards.component';
import { SmallNumberInputComponent } from './form-controls/small-number-input/small-number-input.component';
import { DeletePaymentComponent } from './components/user/layouts/deletes/delete-payment/delete-payment.component';
import { UserChildComponentBaseComponent } from './components/user/bases/user-child-component-base/user-child-component-base.component';
import { EntityManagementRouterButtonsPageComponent } from './components/admin/layouts/router-buttons/entity-management-router-buttons-page/entity-management-router-buttons-page.component';
import { UpdCarComponent } from './components/admin/pages/management/updates/upd-car/upd-car.component';
import { AdminChildComponentBaseComponent } from './components/admin/bases/admin-child-component-base/admin-child-component-base.component';
import { DelCarComponent } from './components/admin/pages/management/deletes/del-car/del-car.component';
import { AddBrandComponent } from './components/admin/pages/management/adds/add-brand/add-brand.component';
import { AddColorComponent } from './components/admin/pages/management/adds/add-color/add-color.component';
import { DelBrandComponent } from './components/admin/pages/management/deletes/del-brand/del-brand.component';
import { DelColorComponent } from './components/admin/pages/management/deletes/del-color/del-color.component';
import { UpdBrandComponent } from './components/admin/pages/management/updates/upd-brand/upd-brand.component';
import { UpdColorComponent } from './components/admin/pages/management/updates/upd-color/upd-color.component';
import { RouteToLoginPageButtonComponent } from './components/public/layouts/router-buttons/route-to-login-page-button/route-to-login-page-button.component';
import { RouteToRegisterPageButtonComponent } from './components/public/layouts/router-buttons/route-to-register-page-button/route-to-register-page-button.component';
import { RouteToProfilePageButtonComponent } from './components/user/layouts/router-buttons/route-to-profile-page-button/route-to-profile-page-button.component';
import { ProfileComponent } from './components/user/pages/profile/profile.component';
import { FindeksPointBoardComponent } from './components/user/layouts/findeks-point-board/findeks-point-board.component';
import { AccountOptionsComponent } from './components/user/layouts/account-options/account-options.component';
import { UpdatePasswordComponent } from './components/user/layouts/updates/update-password/update-password.component';
import { UpdateEmailComponent } from './components/user/layouts/updates/update-email/update-email.component';
import { UpdateFirstAndLastNameComponent } from './components/user/layouts/updates/update-first-and-last-name/update-first-and-last-name.component';
import { LogoutButtonComponent } from './components/user/layouts/logout-button/logout-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarDetailComponent,
    CarDetailsFilterPipe,
    BrandsPipe,
    ColorsPipe,
    RegisterComponent,
    LoginComponent,
    AddCarComponent,
    CarImagesSliderByCarIdComponent,
    CarDetailsComponent,
    BrandAndColorSelectOptionCarFilterComponent,
    BrandSelectOptionCarFilterComponent,
    ColorSelectOptionCarFilterComponent,
    RouteToCarDetailsPageButtonComponent,
    CommonChildComponentBaseComponent,
    PublicChildComponentBaseComponent,
    RouteToRentPageButtonComponent,
    RouteToCarDetailPageButtonComponent,
    RentComponent,
    PayComponent,
    PayWithSavedCardsComponent,
    SmallNumberInputComponent,
    DeletePaymentComponent,
    UserChildComponentBaseComponent,
    EntityManagementRouterButtonsPageComponent,
    UpdCarComponent,
    AdminChildComponentBaseComponent,
    DelCarComponent,
    AddBrandComponent,
    AddColorComponent,
    DelBrandComponent,
    DelColorComponent,
    UpdBrandComponent,
    UpdColorComponent,
    RouteToLoginPageButtonComponent,
    RouteToRegisterPageButtonComponent,
    RouteToProfilePageButtonComponent,
    ProfileComponent,
    FindeksPointBoardComponent,
    AccountOptionsComponent,
    UpdatePasswordComponent,
    UpdateEmailComponent,
    UpdateFirstAndLastNameComponent,
    LogoutButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
