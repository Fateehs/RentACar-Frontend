import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './components/admin/pages/adds/car-add/add-car.component';
import { CarDetailsComponent } from './components/public/pages/cardetails/cardetails.component';
import { LoginComponent } from './components/public/pages/login/login.component';
import { RegisterComponent } from './components/public/pages/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: CarDetailsComponent },
  { path: 'car-details', component: CarDetailsComponent },
  { path: 'car-details/brand/:brandId', component: CarDetailsComponent },
  { path: 'car-details/color/:colorId', component: CarDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cars/add', component: AddCarComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
