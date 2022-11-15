import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteToBrandListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-brand-list-page-button/route-to-brand-list-page-button.component';
import { RouteToCarDetailListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-car-detail-list-page-button/route-to-car-detail-list-page-button.component';
import { RouteToColorListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-color-list-page-button/route-to-color-list-page-button.component';
import { RouteToCustomerListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-customer-list-page-button/route-to-customer-list-page-button.component';
import { RouteToRentalDetailListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-rental-detail-list-page-button/route-to-rental-detail-list-page-button.component';
import { AddBrandComponent } from './components/admin/pages/management/adds/add-brand/add-brand.component';
import { AddCarComponent } from './components/admin/pages/management/adds/add-car/add-car.component';
import { AddColorComponent } from './components/admin/pages/management/adds/add-color/add-color.component';
import { DelBrandComponent } from './components/admin/pages/management/deletes/del-brand/del-brand.component';
import { DelCarComponent } from './components/admin/pages/management/deletes/del-car/del-car.component';
import { DelColorComponent } from './components/admin/pages/management/deletes/del-color/del-color.component';
import { UpdBrandComponent } from './components/admin/pages/management/updates/upd-brand/upd-brand.component';
import { UpdCarComponent } from './components/admin/pages/management/updates/upd-car/upd-car.component';
import { UpdColorComponent } from './components/admin/pages/management/updates/upd-color/upd-color.component';
import { CarDetailComponent } from './components/public/pages/cardetail/cardetail.component';
import { CarDetailsComponent } from './components/public/pages/cardetails/cardetails.component';
import { LoginComponent } from './components/public/pages/login/login.component';
import { RegisterComponent } from './components/public/pages/register/register.component';
import { PayComponent } from './components/user/pages/pay/pay.component';
import { ProfileComponent } from './components/user/pages/profile/profile.component';
import { RentComponent } from './components/user/pages/rent/rent.component';
import { LoginGuard } from './guards/login.guard';
import { CarId } from './models/constants/entity-ids';
import {
  BrandAddPath,
  BrandDeletePath,
  BrandListPath,
  BrandUpdatePath,
  CarAddPath,
  CarDeletePath,
  CarDetailByIdPath,
  CarDetailListPath,
  CarDetailsByBrandIdPath,
  CarDetailsByColorIdPath,
  CarDetailsPath,
  CarUpdatePath,
  ColorAddPath,
  ColorDeletePath,
  ColorListPath,
  ColorUpdatePath,
  CustomerListPath,
  EntityManagementPath,
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
  { path: CarDetailsPath, component: CarDetailsComponent },
  { path: CarDetailsByBrandIdPath + ':brandId', component: CarDetailsComponent },
  { path: CarDetailsByColorIdPath +':colorId', component: CarDetailsComponent },
  { path: CarDetailByIdPath + ':' + CarId, component: CarDetailComponent },
  { path: RentByCarIdPath + ':' + CarId, component: RentComponent },
  { path: PayPath, component: PayComponent },
  { path: RegisterPath, component: RegisterComponent },
  { path: LoginPath, component: LoginComponent },
  { path: ProfilePath, component: ProfileComponent, canActivate: [LoginGuard] },
  { path: BrandListPath, component: RouteToBrandListPageButtonComponent},
  { path: ColorListPath, component: RouteToColorListPageButtonComponent},
  { path: CustomerListPath, component: RouteToCustomerListPageButtonComponent },
  { path: CarDetailListPath, component: RouteToCarDetailListPageButtonComponent},
  { path: RentalDetailListPath, component: RouteToRentalDetailListPageButtonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
