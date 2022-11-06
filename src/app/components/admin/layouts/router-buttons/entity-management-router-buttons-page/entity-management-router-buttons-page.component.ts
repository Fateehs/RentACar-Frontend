import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  CarAddPath,
  CarDeletePath,
  CarUpdatePath,
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
}
