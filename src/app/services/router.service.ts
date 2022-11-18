import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
} from 'src/app/models/constants/paths';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private router: Router) {}

  homePage() {
    this.router.navigate([HomePagePath]);
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

  paymentPage() {
    this.router.navigate([PayPath]);
  }

  loginPage() {
    this.router.navigate([LoginPath]);
  }

  registerPage() {
    this.router.navigate([RegisterPath]);
  }

  profilePage() {
    this.router.navigate([ProfilePath]);
  }

  addBrandPage() {
    this.router.navigate([AddBrandPath]);
  }

  addCarImagePageByCarId(carId: number) {
    this.router.navigate([AddCarImageByCarIdPath + carId]);
  }

  addCarPage() {
    this.router.navigate([AddCarPath]);
  }

  addColorPage() {
    this.router.navigate([AddColorPath]);
  }

  brandListPage() {
    this.router.navigate([BrandListPath]);
  }

  carDetailListPage() {
    this.router.navigate([CarDetailListPath]);
  }

  colorListPage() {
    this.router.navigate([ColorListPath]);
  }

  customerListPage() {
    this.router.navigate([CustomerListPath]);
  }

  rentalDetailListPage() {
    this.router.navigate([RentalDetailListPath]);
  }
}
