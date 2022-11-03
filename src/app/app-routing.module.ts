import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
import { CarDetailsComponent } from './components/cardetails/cardetails.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: CarDetailsComponent },
  { path: 'car-details', component: CarDetailsComponent },
  { path: 'car-details/brand/:brandId', component: CarDetailsComponent },
  { path: 'car-details/color/:colorId', component: CarDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cars/add', component: CarAddComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
