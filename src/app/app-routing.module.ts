import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteToBrandListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-brand-list-page-button/route-to-brand-list-page-button.component';
import { RouteToCarDetailListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-car-detail-list-page-button/route-to-car-detail-list-page-button.component';
import { RouteToColorListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-color-list-page-button/route-to-color-list-page-button.component';
import { RouteToCustomerListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-customer-list-page-button/route-to-customer-list-page-button.component';
import { RouteToRentalDetailListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-rental-detail-list-page-button/route-to-rental-detail-list-page-button.component';
import { BrandListComponent } from './components/admin/pages/lists/brand-list/brand-list.component';
import { CarDetailListComponent } from './components/admin/pages/lists/car-detail-list/car-detail-list.component';
import { ColorListComponent } from './components/admin/pages/lists/color-list/color-list.component';
import { CustomerListComponent } from './components/admin/pages/lists/customer-list/customer-list.component';
import { RentalDetailListComponent } from './components/admin/pages/lists/rental-detail-list/rental-detail-list.component';
import { AddBrandComponent } from './components/admin/pages/management/adds/add-brand/add-brand.component';
import { AddCarImageComponent } from './components/admin/pages/management/adds/add-car-image/add-car-image.component';
import { AddCarComponent } from './components/admin/pages/management/adds/add-car/add-car.component';
import { AddColorComponent } from './components/admin/pages/management/adds/add-color/add-color.component';
import { CarDetailComponent } from './components/public/pages/cardetail/cardetail.component';
import { CarDetailsComponent } from './components/public/pages/cardetails/cardetails.component';
import { LoginComponent } from './components/public/pages/login/login.component';
import { RegisterComponent } from './components/public/pages/register/register.component';
import { PayComponent } from './components/user/pages/pay/pay.component';
import { ProfileComponent } from './components/user/pages/profile/profile.component';
import { RentComponent } from './components/user/pages/rent/rent.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';
import { UserGuard } from './guards/user.guard';
import { CarId } from './models/constants/entity-ids';
import {
  AddBrandPath,
  AddCarImageByCarIdPath,
  AddCarPath,
  AddColorPath,
  BrandListPath,
  CarDetailByIdPath,
  CarDetailListPath,
  CarDetailsByBrandIdPath,
  CarDetailsByColorIdPath,
  CarDetailsPath,
  ColorListPath,
  CustomerListPath,
  HomePagePath,
  LoginPath,
  PayPath,
  ProfilePath,
  RegisterPath,
  RentalDetailListPath,
  RentByCarIdPath,
} from './models/constants/paths';

const routes: Routes = [
  { path: HomePagePath, component: CarDetailsComponent },
  { path: CarDetailsByBrandIdPath + ':brandId', component: CarDetailsComponent,},
  { path: CarDetailsByColorIdPath + ':colorId', component: CarDetailsComponent,},
  { path: CarDetailByIdPath + ':' + CarId, component: CarDetailComponent },
  { path: RentByCarIdPath + ':' + CarId, component: RentComponent, canActivate: [UserGuard] },
  { path: PayPath, component: PayComponent , canActivate: [UserGuard]},
  { path: RegisterPath, component: RegisterComponent },
  { path: LoginPath, component: LoginComponent },
  { path: ProfilePath, component: ProfileComponent, canActivate: [LoginGuard] },
  { path: BrandListPath, component: BrandListComponent, canActivate: [AdminGuard] },
  { path: ColorListPath, component: ColorListComponent, canActivate: [AdminGuard] },
  { path: CustomerListPath, component: CustomerListComponent, canActivate: [AdminGuard] },
  { path: CarDetailListPath, component: CarDetailListComponent, canActivate: [AdminGuard] },
  { path: RentalDetailListPath, component: RentalDetailListComponent, canActivate: [AdminGuard] },
  { path: AddCarPath, component: AddCarComponent, canActivate: [AdminGuard] },
  { path: AddBrandPath, component: AddBrandComponent, canActivate: [AdminGuard] },
  { path: AddColorPath, component: AddColorComponent, canActivate: [AdminGuard] },
  { path: AddCarImageByCarIdPath + ":" + CarId, component: AddCarImageComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
