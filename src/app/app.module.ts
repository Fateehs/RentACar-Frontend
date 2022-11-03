import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailsFilterPipe } from './pipes/car-details-filter.pipe';
import { BrandsPipe } from './pipes/brands-filter.pipe';
import { ColorsPipe } from './pipes/colors-filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarImagesSliderByCarIdComponent } from './components/car-images-slider-by-car-id/car-images-slider-by-car-id.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
import { CarDetailsComponent } from './components/cardetails/cardetails.component';
import { BrandAndColorSelectOptionCarFilterComponent } from './components/brand-and-color-select-option-car-filter/brand-and-color-select-option-car-filter.component';
import { BrandSelectOptionCarFilterComponent } from './components/brand-select-option-car-filter/brand-select-option-car-filter.component';
import { ColorSelectOptionCarFilterComponent } from './components/color-select-option-car-filter/color-select-option-car-filter.component';
import { RouteToCarDetailsPageButtonComponent } from './components/router-buttons/route-to-car-details-page-button/route-to-car-details-page-button.component';
import { CommonChildComponentBaseComponent } from './components/public/bases/common-child-component-base/common-child-component-base.component';
import { PublicChildComponentBaseComponent } from './components/public/bases/public-child-component-base/public-child-component-base.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent,
    CarDetailsFilterPipe,
    BrandsPipe,
    ColorsPipe,
    RegisterComponent,
    LoginComponent,
    CarAddComponent,
    CarImagesSliderByCarIdComponent,
    CarDetailsComponent,
    BrandAndColorSelectOptionCarFilterComponent,
    BrandSelectOptionCarFilterComponent,
    ColorSelectOptionCarFilterComponent,
    RouteToCarDetailsPageButtonComponent,
    CommonChildComponentBaseComponent,
    PublicChildComponentBaseComponent,
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
