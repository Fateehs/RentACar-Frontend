import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BrandAddPath,
  BrandDeletePath,
  BrandUpdatePath,
  CarAddPath,
  CarDeletePath,
  CarUpdatePath,
  ColorAddPath,
  ColorDeletePath,
  ColorUpdatePath,
} from 'src/app/models/constants/paths';

@Component({
  selector: 'app-entity-management-router-buttons-page',
  templateUrl: './entity-management-router-buttons-page.component.html',
  styleUrls: ['./entity-management-router-buttons-page.component.css'],
})
export class EntityManagementRouterButtonsPageComponent {
  constructor(private router: Router) {}

  routeToCarAddPage() {
    this.router.navigate([CarAddPath]);
  }

  routeToCarUpdatePage() {
    this.router.navigate([CarUpdatePath]);
  }

  routeToCarDeletePage() {
    this.router.navigate([CarDeletePath]);
  }

  routeToColorAddPage() {
    this.router.navigate([ColorAddPath]);
  }

  routeToColorUpdatePage() {
    this.router.navigate([ColorUpdatePath]);
  }

  routeToColorDeletePage() {
    this.router.navigate([ColorDeletePath]);
  }

  routeToBrandAddPage() {
    this.router.navigate([BrandAddPath]);
  }

  routeToBrandUpdatePage() {
    this.router.navigate([BrandUpdatePath]);
  }

  routeToBrandDeletePage() {
    this.router.navigate([BrandDeletePath]);
  }
}
