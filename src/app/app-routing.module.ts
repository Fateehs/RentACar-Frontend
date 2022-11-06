import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityManagementRouterButtonsPageComponent } from './components/admin/layouts/router-buttons/entity-management-router-buttons-page/entity-management-router-buttons-page.component';
import { AddCarComponent } from './components/admin/pages/management/adds/add-car/add-car.component';
import { DelCarComponent } from './components/admin/pages/management/deletes/del-car/del-car.component';
import { UpdCarComponent } from './components/admin/pages/management/updates/upd-car/upd-car.component';
import { CarDetailComponent } from './components/public/pages/cardetail/cardetail.component';
import { CarDetailsComponent } from './components/public/pages/cardetails/cardetails.component';
import { LoginComponent } from './components/public/pages/login/login.component';
import { RegisterComponent } from './components/public/pages/register/register.component';
import { PayComponent } from './components/user/pages/pay/pay.component';
import { RentComponent } from './components/user/pages/rent/rent.component';
import { LoginGuard } from './guards/login.guard';
import { CarId } from './models/constants/entity-ids';
import { CarDetailByIdPath, RentByCarIdPath } from './models/constants/paths';

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
  { path: 'pay', component: PayComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'entity-management-page',
    component: EntityManagementRouterButtonsPageComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
