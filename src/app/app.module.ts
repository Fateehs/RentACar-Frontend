import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'ng2-file-upload';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminChildComponentBaseComponent } from './components/admin/bases/admin-child-component-base/admin-child-component-base.component';
import { AdministrationDropdownComponent } from './components/admin/layouts/administration-dropdown/administration-dropdown.component';
import { DeleteBrandComponent } from './components/admin/layouts/deletes/delete-brand/delete-brand.component';
import { DeleteCarImageComponent } from './components/admin/layouts/deletes/delete-car-image/delete-car-image.component';
import { DeleteCarComponent } from './components/admin/layouts/deletes/delete-car/delete-car.component';
import { DeleteColorComponent } from './components/admin/layouts/deletes/delete-color/delete-color.component';
import { RouteToAddBrandPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-add-brand-page-button/route-to-add-brand-page-button.component';
import { RouteToAddCarImagePageButtonComponent } from './components/admin/layouts/router-buttons/route-to-add-car-image-page-button/route-to-add-car-image-page-button.component';
import { RouteToAddCarPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-add-car-page-button/route-to-add-car-page-button.component';
import { RouteToAddColorPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-add-color-page-button/route-to-add-color-page-button.component';
import { RouteToBrandListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-brand-list-page-button/route-to-brand-list-page-button.component';
import { RouteToCarDetailListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-car-detail-list-page-button/route-to-car-detail-list-page-button.component';
import { RouteToColorListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-color-list-page-button/route-to-color-list-page-button.component';
import { RouteToCustomerListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-customer-list-page-button/route-to-customer-list-page-button.component';
import { RouteToRentalDetailListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-rental-detail-list-page-button/route-to-rental-detail-list-page-button.component';
import { UpdateBrandComponent } from './components/admin/layouts/updates/update-brand/update-brand.component';
import { UpdateCarComponent } from './components/admin/layouts/updates/update-car/update-car.component';
import { UpdateColorComponent } from './components/admin/layouts/updates/update-color/update-color.component';
import { BrandListComponent } from './components/admin/pages/lists/brand-list/brand-list.component';
import { CarDetailListComponent } from './components/admin/pages/lists/car-detail-list/car-detail-list.component';
import { ColorListComponent } from './components/admin/pages/lists/color-list/color-list.component';
import { CustomerListComponent } from './components/admin/pages/lists/customer-list/customer-list.component';
import { RentalDetailListComponent } from './components/admin/pages/lists/rental-detail-list/rental-detail-list.component';
import { AddBrandComponent } from './components/admin/pages/management/adds/add-brand/add-brand.component';
import { AddCarComponent } from './components/admin/pages/management/adds/add-car/add-car.component';
import { AddColorComponent } from './components/admin/pages/management/adds/add-color/add-color.component';
import { CommonChildComponentBaseComponent } from './components/public/bases/common-child-component-base/common-child-component-base.component';
import { PublicChildComponentBaseComponent } from './components/public/bases/public-child-component-base/public-child-component-base.component';
import { BrandAndColorSelectOptionCarFilterComponent } from './components/public/layouts/brand-and-color-select-option-car-filter/brand-and-color-select-option-car-filter.component';
import { BrandSelectOptionCarFilterComponent } from './components/public/layouts/brand-select-option-car-filter/brand-select-option-car-filter.component';
import { CarImagesSliderByCarIdComponent } from './components/public/layouts/car-images-slider-by-car-id/car-images-slider-by-car-id.component';
import { ColorSelectOptionCarFilterComponent } from './components/public/layouts/color-select-option-car-filter/color-select-option-car-filter.component';
import { NaviComponent } from './components/public/layouts/navi/navi.component';
import { RouteToCarDetailPageButtonComponent } from './components/public/layouts/router-buttons/route-to-car-detail-page-button/route-to-car-detail-page-button.component';
import { RouteToCarDetailsPageButtonComponent } from './components/public/layouts/router-buttons/route-to-car-details-page-button/route-to-car-details-page-button.component';
import { RouteToHomePageButtonComponent } from './components/public/layouts/router-buttons/route-to-home-page-button/route-to-home-page-button.component';
import { RouteToLoginPageButtonComponent } from './components/public/layouts/router-buttons/route-to-login-page-button/route-to-login-page-button.component';
import { RouteToRegisterPageButtonComponent } from './components/public/layouts/router-buttons/route-to-register-page-button/route-to-register-page-button.component';
import { RouteToRentPageButtonComponent } from './components/public/layouts/router-buttons/route-to-rent-page-button/route-to-rent-page-button.component';
import { CarDetailComponent } from './components/public/pages/cardetail/cardetail.component';
import { CarDetailsComponent } from './components/public/pages/cardetails/cardetails.component';
import { LoginComponent } from './components/public/pages/login/login.component';
import { RegisterComponent } from './components/public/pages/register/register.component';
import { UserChildComponentBaseComponent } from './components/user/bases/user-child-component-base/user-child-component-base.component';
import { AccountOptionsComponent } from './components/user/layouts/account-options/account-options.component';
import { DeletePaymentComponent } from './components/user/layouts/deletes/delete-payment/delete-payment.component';
import { FindeksPointBoardComponent } from './components/user/layouts/findeks-point-board/findeks-point-board.component';
import { LogoutButtonComponent } from './components/user/layouts/logout-button/logout-button.component';
import { PayWithSavedCardsComponent } from './components/user/layouts/pay-with-saved-cards/pay-with-saved-cards.component';
import { RouteToProfilePageButtonComponent } from './components/user/layouts/router-buttons/route-to-profile-page-button/route-to-profile-page-button.component';
import { UpdateEmailComponent } from './components/user/layouts/updates/update-email/update-email.component';
import { UpdateFirstAndLastNameComponent } from './components/user/layouts/updates/update-first-and-last-name/update-first-and-last-name.component';
import { UpdatePasswordComponent } from './components/user/layouts/updates/update-password/update-password.component';
import { PayComponent } from './components/user/pages/pay/pay.component';
import { ProfileComponent } from './components/user/pages/profile/profile.component';
import { RentComponent } from './components/user/pages/rent/rent.component';
import { SmallNumberInputComponent } from './form-controls/small-number-input/small-number-input.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrandsPipe } from './pipes/brands-filter.pipe';
import { CarDetailsFilterPipe } from './pipes/car-details-filter.pipe';
import { ColorsPipe } from './pipes/colors-filter.pipe';
import { AddCarImageComponent } from './components/admin/pages/management/adds/add-car-image/add-car-image.component';

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
    AdminChildComponentBaseComponent,
    AddBrandComponent,
    AddColorComponent,
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
    AdministrationDropdownComponent,
    RouteToAddBrandPageButtonComponent,
    RouteToAddCarImagePageButtonComponent,
    RouteToAddCarPageButtonComponent,
    RouteToAddColorPageButtonComponent,
    RouteToBrandListPageButtonComponent,
    RouteToCarDetailListPageButtonComponent,
    RouteToColorListPageButtonComponent,
    RouteToCustomerListPageButtonComponent,
    RouteToRentalDetailListPageButtonComponent,
    RouteToHomePageButtonComponent,
    CarDetailListComponent,
    BrandListComponent,
    ColorListComponent,
    CustomerListComponent,
    RentalDetailListComponent,

    DeleteBrandComponent,
    DeleteCarImageComponent,
    DeleteCarComponent,
    DeleteColorComponent,
    UpdateBrandComponent,
    UpdateCarComponent,
    UpdateColorComponent,
    AddCarImageComponent,
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
    FileUploadModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
