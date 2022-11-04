import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  CarDetailByIdPath,
  CarDetailsByBrandIdPath,
  CarDetailsByColorIdPath,
  CarDetailsPath,
  HomePagePath,
  PayPath,
  RentByCarIdPath,
} from 'src/app/models/constants/paths';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private router: Router) {}

  homePage(){
    this.router.navigate([HomePagePath])
  }

  carDetailsPage() {
    this.router.navigate([CarDetailsPath]);
  }

  carDetailsPageByBrandId(brandId: number) {
    if (brandId > 0) {
      this.router.navigate([CarDetailsByBrandIdPath + brandId]);
    }
  }

  carDetailsPageByColorId(colorId: number) {
    if (colorId > 0) {
      this.router.navigate([CarDetailsByColorIdPath + colorId]);
    }
  }

  rentPage(carId: number) {
    if (carId > 0) {
      this.router.navigate([RentByCarIdPath + carId]);
    }
  }

  carDetailPageById(carId: number) {
    this.router.navigate([CarDetailByIdPath + carId]);
  }

  paymentPage(){
    this.router.navigate([PayPath])
  }
}
