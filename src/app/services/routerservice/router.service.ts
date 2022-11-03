import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  CarDetailsByBrandIdPath,
  CarDetailsByColorIdPath,
  CarDetailsPath,
} from 'src/app/models/constants/paths';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private router: Router) {}

  carDetailsPage(){
    this.router.navigate([CarDetailsPath])
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
}
