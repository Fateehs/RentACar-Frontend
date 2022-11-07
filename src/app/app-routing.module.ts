import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityManagementRouterButtonsPageComponent } from './components/admin/layouts/router-buttons/entity-management-router-buttons-page/entity-management-router-buttons-page.component';
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
  CarDetailByIdPath,
  ProfilePath,
  RentByCarIdPath,
} from './models/constants/paths';

const routes: Routes = [
  { path: '', component: CarDetailsComponent },
  { path: 'car-details', component: CarDetailsComponent },
  { path: 'car-details/brand/:brandId', component: CarDetailsComponent },
  { path: 'car-details/color/:colorId', component: CarDetailsComponent },
  { path: CarDetailByIdPath + ':' + CarId, component: CarDetailComponent },
  { path: RentByCarIdPath + ':' + CarId, component: RentComponent },
  { path: 'cars/add', component: AddCarComponent },
  { path: 'cars/update', component: UpdCarComponent },
  { path: 'cars/delete', component: DelCarComponent },
  { path: 'colors/add', component: AddColorComponent },
  { path: 'colors/update', component: UpdColorComponent },
  { path: 'colors/delete', component: DelColorComponent },
  { path: 'brands/add', component: AddBrandComponent },
  { path: 'brands/update', component: UpdBrandComponent },
  { path: 'brands/delete', component: DelBrandComponent },
  { path: 'pay', component: PayComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'entity-management-page',component: EntityManagementRouterButtonsPageComponent,canActivate: [LoginGuard],},
  { path: ProfilePath, component: ProfileComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
