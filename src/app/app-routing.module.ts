import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  BrandUpdatePath,
  CarAddPath,
  CarDeletePath,
  CarDetailByIdPath,
  CarDetailsByBrandIdPath,
  CarDetailsByColorIdPath,
  CarDetailsPath,
  CarUpdatePath,
  ColorAddPath,
  ColorDeletePath,
  ColorUpdatePath,
  EntityManagementPath,
  HomePagePath,
  LoginPath,
  PayPath,
  ProfilePath,
  RegisterPath,
  RentByCarIdPath,
} from './models/constants/paths';

const routes: Routes = [
  { path: HomePagePath, component: CarDetailsComponent },
  { path: CarDetailsPath, component: CarDetailsComponent },
  { path: CarDetailsByBrandIdPath + ':brandId', component: CarDetailsComponent },
  { path: CarDetailsByColorIdPath +':colorId', component: CarDetailsComponent },
  { path: CarDetailByIdPath + ':' + CarId, component: CarDetailComponent },
  { path: RentByCarIdPath + ':' + CarId, component: RentComponent },
  { path: CarAddPath, component: AddCarComponent },
  { path: CarUpdatePath, component: UpdCarComponent },
  { path: CarDeletePath, component: DelCarComponent },
  { path: ColorAddPath, component: AddColorComponent },
  { path: ColorUpdatePath, component: UpdColorComponent },
  { path: ColorDeletePath, component: DelColorComponent },
  { path: BrandAddPath, component: AddBrandComponent },
  { path: BrandUpdatePath, component: UpdBrandComponent },
  { path: BrandDeletePath, component: DelBrandComponent },
  { path: PayPath, component: PayComponent },
  { path: RegisterPath, component: RegisterComponent },
  { path: LoginPath, component: LoginComponent },
  { path: ProfilePath, component: ProfileComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
